import { StyleSheet, Text, View, Image, Switch, Alert } from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectMenuInfo, setMenuInfo, setSpendingLimit } from '../../redux/userSlice'


const SlidingPaneList = ({ spendingLimit }) => {
  const panelMenu = useSelector(selectMenuInfo)
  return (
    <>
      {panelMenu.map(item => <ListItem item={item} spendingLimit={spendingLimit} />)}

    </>
  )
}


export default SlidingPaneList

const ListItem = ({ item, spendingLimit }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const menuInfo = useSelector(selectMenuInfo)

  const menuInfoModifierPayload = (id) => {
    let objIndex = menuInfo.findIndex((obj => obj.id == id));
    return { index: objIndex, value: false }
  }

  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={item.image} style={{ height: 30, width: 30 }} />

        <View style={styles.menuInfoWrapper} >
          <Text style={{ fontWeight: '400' }}>{item.title}</Text>
          <Text style={{ color: '#b9b9b9', fontSize: 14 }} numberOfLines={2}>{item.title === 'Weekly spending limit' && spendingLimit ? `Your weekly spending limit is S$${spendingLimit}` : item.meta}</Text>
        </View>

      </View>

      <View >
        {item.toggle === null || item.toggle ?
          <Switch
            style={{ transform: [{ scaleX: .6 }, { scaleY: .6 }] }}
            trackColor={{ false: COLORS.toggleFalseTrackColor, true: COLORS.toggleTrueTrackColor }}
            thumbColor={item?.isToggled ? COLORS.white : COLORS.white}
            ios_backgroundColor={COLORS.toggleFalseTrackColor}
            onValueChange={() => {
              if (item?.isToggled) {
                Alert.alert(
                  'Weekly Limit',
                  'Are you sure that you want to turn me off? you might lose control of your cash flow',
                  [
                    {
                      text: 'Proceed', onPress: () => {
                        dispatch(setMenuInfo(menuInfoModifierPayload(item.id)))
                        dispatch(setSpendingLimit(null))
                      }
                    },
                    { text: 'Cancel' },
                  ],
                  { cancelable: false }
                )
                dispatch(setMenuInfo(menuInfoModifierPayload(item.id)))
                dispatch(setSpendingLimit(null))
                return;
              }
              navigation.navigate('Limit', { id: item.id, toggledValue: item?.isToggled })

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
    padding: SIZES.padding/2
  },
  menuInfoWrapper: {
    width: '80%'
  }


})