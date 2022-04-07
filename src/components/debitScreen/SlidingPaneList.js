import { StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { setSpendingLimit } from '../../slices/userSlice'



const panelMenu = [
  {id:1, image: icons.insight, title: 'Top-up-account', meta: 'Deposit money to your account to use with card', toggle: false },
  {id:2, image: icons.transfer, title: 'Weekly spending limit', meta: "you haven't set any spending limit on card", toggle: true,isToggled:false },
  {id:3, image: icons.freeze, title: 'Freeze card', meta: 'Your Debit card is currently active', toggle: null },
  {id:4, image: icons.newCard, title: 'Get a new card ', meta: 'This activates your current debit card', toggle: false },
  {id:5, image: icons.deactivate, title: 'Deactivated cards', meta: 'This deactivates your current debit card', toggle: false },
]

const SlidingPaneList = ({spendingLimit}) => {

  return (
    <>
      {panelMenu.map(item => <ListItem title={item.title} meta={item.meta} image={item.image} toggle={item.toggle} spendingLimit={spendingLimit}/>)}

    </>
  )
}


export default SlidingPaneList

const ListItem = ({ title, meta, image, toggle,spendingLimit }) => {
  const [toggleState, setToggleState] = useState(false)
  const dispatch = useDispatch();
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={image} style={{ height: 30, width: 30 }} />

        <View style={styles.menuInfoWrapper} >
          <Text style={{ fontWeight: '400' }}>{title}</Text>
          <Text style={{ color: '#b9b9b9',fontSize:14 }} numberOfLines={2}>{title === 'Weekly spending limit' &&spendingLimit ? `Your weekly spending limit is S$${spendingLimit}` :meta}</Text>
        </View>

      </View>

      <View >
        {toggle === null || toggle ?
          <Switch
            style={{ transform: [{ scaleX: .6 }, { scaleY: .6}] }}
            trackColor={{ false: COLORS.toggleFalseTrackColor, true: COLORS.toggleTrueTrackColor }}
            thumbColor={toggleState ? COLORS.white : COLORS.white}
            ios_backgroundColor={COLORS.toggleFalseTrackColor}
            onValueChange={() => {
              navigation.navigate('Limit')
              if (toggleState ) {
                setToggleState(!toggleState)
                dispatch(setSpendingLimit(null))
                return
              }
              if(spendingLimit!== null) setToggleState(!toggleState) // this will enable the toogle only if the user has set the weekly limit. This covers the scenario where the user navigates back to the Debit screen without setting the weeklyLimit
              
              
            }}
            disabled={toggle === null ? true : false}
            value={toggleState}
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