import { StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'



const panelMenu = [
  { image: icons.insight, title: 'Top-up-account', meta: 'Deposit money to your account to use with card', toggle: false },
  { image: icons.transfer, title: 'Weekly spending limit', meta: "you haven't set any spending limit on card", toggle: true },
  { image: icons.freeze, title: 'Freeze card', meta: 'Your Debit card is currently active', toggle: null },
  { image: icons.newCard, title: 'Get a new card ', meta: 'This activates your current debit card', toggle: false },
  { image: icons.deactivate, title: 'Deactivated cards', meta: 'This deactivates your current debit card', toggle: false },
]

const SlidingPaneList = () => {

  return (
    <>
      {panelMenu.map(item => <ListItem title={item.title} meta={item.meta} image={item.image} toggle={item.toggle} />)}

    </>
  )
}


export default SlidingPaneList

const ListItem = ({ title, meta, image, toggle }) => {
  const [toggleState, setToggleState] = useState(false)
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Image source={image} style={{ height: 30, width: 30 }} />

        <View style={styles.menuInfoWrapper} >
          <Text style={{ fontWeight: '600' }}>{title}</Text>
          <Text style={{ color: COLORS.gray }} numberOfLines={2}>{meta}</Text>
        </View>

      </View>

      <View >
        {toggle === null || toggle ?
          <Switch
            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
            trackColor={{ false: COLORS.toggleFalseTrackColor, true: COLORS.toggleTrueTrackColor }}
            thumbColor={toggleState ? COLORS.white : COLORS.white}
            ios_backgroundColor={COLORS.toggleFalseTrackColor}
            onValueChange={() => {
              if (toggleState) {
                setToggleState(!toggleState)
                return
              }
              setToggleState(!toggleState)
              navigation.navigate('Limit')
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