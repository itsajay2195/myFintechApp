import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image,TextInput,TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/common/Header'
import { COLORS, PLATFORM, icons, SIZES } from '../constants'
import CurrencyCard from '../components/common/CurrencyCard'
import Tags from '../components/weeklyLimitScreen/Tags'
import { selectSpendingLimit,setSpendingLimit } from '../slices/userSlice'
import { useSelector,useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native'

const WeeklyLimit = () => {
  const spendingLimit = useSelector(selectSpendingLimit)
  const [limitFieldValue,onLimitFieldValueChange] = useState('')
  const dispatch = useDispatch();
  const navigation = useNavigation()

    const saveSpendingLimit =(val)=>{
        let num = parseFloat(val.replace(',', ''))//  this is basically done to check if the user inputted number is less than 0 or not
        if(num < 0){
          Alert.alert('Amount cannot be less than Zero') 
        }
        let decimalStrippedValue = val.includes(".") ? val.split(".")[0] : val // this will strip the contents after the decimal point
        dispatch(setSpendingLimit(decimalStrippedValue))
        navigation.navigate('Home')
      }

  return (
    <View style={styles.container}>

      <SafeAreaView >
        <Header showBack={true}></Header>
      </SafeAreaView>

      <View style={styles.headingWrapper}>
        <Text style={styles.headingText} > Spending Limit</Text>
      </View>
      <View style={styles.panel}>

        <View style={styles.panelHeader}>
          <Image source={icons.limit} style={{ height: 15, width: 15 }} />
          <Text style={{ left: 10 }}>Set a weekly debit card spending limit</Text>
        </View>



        <View style={styles.currenyLimitContainer}>
          <CurrencyCard />
          <TextInput style={{ paddingHorizontal: SIZES.padding, fontWeight: 'bold',width:'100%' }} value={limitFieldValue} onChangeText={(text)=>onLimitFieldValueChange(text)}/>
        </View>

        <View style={styles.line} />

        <View>
          <Text style={{ color: COLORS.gray, fontSize: 12 }} numberOfLines={2}>Here weekly means the last 7 days- not the calendar week</Text>
        </View>

        <View style={styles.tagsContainer}>
          <Tags setLimitFieldValue={onLimitFieldValueChange} />
        </View>



      </View>
      <SafeAreaView style={styles.saveButtonContainer}>

        <TouchableOpacity style={styles.saveButtonWrapper} onPress={()=>saveSpendingLimit(limitFieldValue)}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </View>

  )
}

export default WeeklyLimit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlue,
    paddingTop: PLATFORM === "android" ? StatusBar.currentHeight : 0
  },
  panel: {
    flex: 4,
    backgroundColor: COLORS.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: SIZES.padding
  },

  headingWrapper: {
    padding: SIZES.padding
  },
  headingText: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  panelHeader: {
    flexDirection: 'row'
  },
  line: {
    borderBottomWidth: PLATFORM === 'ios' ? 0.3 : 0.5,
    borderBottomColor: 'gray',
    marginVertical: 10
  },
  currenyLimitContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  tagsContainer: {
    paddingVertical: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  saveButtonContainer:{backgroundColor: 'white', justifyContent: 'flex-end'},
  saveButtonWrapper:{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: 60, width: '80%', backgroundColor: COLORS.primaryGreen, borderRadius: 50},
  saveText:{ color: COLORS.white,fontSize:SIZES.h3, fontWeight:'bold' }

})