import { StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux';
import { selectMenuInfo,setMenuInfo,MenuInfo } from '../../slices/userSlice'



// const panelMenu = [
//   {id:1, image: icons.insight, title: 'Top-up-account', meta: 'Deposit money to your account to use with card', toggle: false },
//   {id:2, image: icons.transfer, title: 'Weekly spending limit', meta: "you haven't set any spending limit on card", toggle: true,isToggled:false },
//   {id:3, image: icons.freeze, title: 'Freeze card', meta: 'Your Debit card is currently active', toggle: null },
//   {id:4, image: icons.newCard, title: 'Get a new card ', meta: 'This activates your current debit card', toggle: false },
//   {id:5, image: icons.deactivate, title: 'Deactivated cards', meta: 'This deactivates your current debit card', toggle: false },
// ]

const SlidingPaneList = ({spendingLimit}) => {
  const panelMenu = useSelector(selectMenuInfo)
  return (
    <>
      {panelMenu.map(item => <ListItem  item={item}  spendingLimit={spendingLimit} />)}

    </>
  )
}


export default SlidingPaneList

const ListItem = ({item,spendingLimit }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const menuInfo = useSelector(selectMenuInfo)

  const menuInfoModifierPayload = (id)=>{
    let objIndex = menuInfo.findIndex((obj => obj.id == id));
    return {index:objIndex,value:false}
  }
  
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={item.image} style={{ height: 30, width: 30 }} />

        <View style={styles.menuInfoWrapper} >
          <Text style={{ fontWeight: '400' }}>{item.title}</Text>
          <Text style={{ color: '#b9b9b9',fontSize:14 }} numberOfLines={2}>{item.title === 'Weekly spending limit' &&spendingLimit ? `Your weekly spending limit is S$${spendingLimit}` :item.meta}</Text>
        </View>

      </View>

      <View >
        {item.toggle === null || item.toggle ?
          <Switch
            style={{ transform: [{ scaleX: .6 }, { scaleY: .6}] }}
            trackColor={{ false: COLORS.toggleFalseTrackColor, true: COLORS.toggleTrueTrackColor }}
            thumbColor={item?.isToggled ? COLORS.white : COLORS.white}
            ios_backgroundColor={COLORS.toggleFalseTrackColor}
            onValueChange={() => {
              if(item?.isToggled){
                dispatch( setMenuInfo(menuInfoModifierPayload(item.id)))
                return;
              }
              navigation.navigate('Limit',{id:item.id, toggledValue:item?.isToggled})
              
            }}
            disabled={item.toggle === null ? true : false}
            value={item?.isToggled}
          /> : null
        }

      </View>


    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  menuInfoWrapper: {
    width: '80%'
  }


})