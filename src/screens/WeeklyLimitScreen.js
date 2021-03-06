import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TextInput, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/common/Header'
import { COLORS, PLATFORM, icons, SIZES } from '../constants'
import CurrencyCard from '../components/common/CurrencyCard'
import Tags from '../components/weeklyLimitScreen/Tags'
import { setSpendingLimit, selectUserInfo, selectSpendingLimit, setWeeklyLimitToggled } from '../redux/userSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import PasswordPane from '../components/weeklyLimitScreen/PasswordPane'
import BarChart from '../components/weeklyLimitScreen/BarChart'
import PrimaryButton from '../components/common/PrimaryButton'

const WeeklyLimit = (props) => {
  const { id, toggledValue } = props.route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [limitFieldValue, onLimitFieldValueChange] = useState(useSelector(selectSpendingLimit)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const navigation = useNavigation()




  const saveSpendingLimit = (val, id, isToggled) => {

    let num = parseFloat(val.replace(',', ''))//  this is basically done to check if the user inputted number is less than 0 or not
    if (num < 0) {
      Alert.alert('Amount cannot be less than Zero')
      return
    }

    if (typeof (num) !== 'number' || null) {
      Alert.alert('Invalid input')
      return
    }


    let decimalStrippedValue = val.includes(".") ? parseFloat(val.split(".")[0].replace(',', '')) : num // this will strip the contents after the decimal point

    if (userInfo?.card_info?.available_balance < decimalStrippedValue) {
      Alert.alert('Insufficeint balance')
      return
    }

    dispatch(setSpendingLimit(decimalStrippedValue))
    dispatch(setWeeklyLimitToggled(!isToggled))

    navigation.navigate('Debit Card')
  }

  const onSaveClick = () => {
    setModalVisible(!modalVisible)
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
          <TextInput style={{ paddingHorizontal: SIZES.padding, fontWeight: 'bold', width: '100%' }} value={limitFieldValue} onChangeText={(text) => onLimitFieldValueChange(text)} />
        </View>

        <View style={styles.line} />

        <View>
          <Text style={{ color: COLORS.gray, fontSize: 12 }} numberOfLines={2}>Here weekly means the last 7 days- not the calendar week</Text>
        </View>

        <View style={styles.tagsContainer}>
          <Tags setLimitFieldValue={onLimitFieldValueChange} />
        </View>

        <ScrollView>
          <Text numberOfLines={2} style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Your spent analysis for the last 4 months </Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <BarChart />
          </View>
        </ScrollView>

      </View>


      {modalVisible && <PasswordPane modalVisible={modalVisible} setModalVisible={setModalVisible} saveSpendingLimit={saveSpendingLimit} id={id} value={limitFieldValue} />}
      <SafeAreaView style={styles.saveButtonContainer}>

        <PrimaryButton isDisabled={!limitFieldValue} height={60} width="80%" onPress={onSaveClick} btnText={"Save"} />

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
    marginBottom: 10
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
  saveButtonContainer: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingBottom: PLATFORM === "android" ? StatusBar.currentHeight : 0
  },

  saveText: { color: COLORS.white, fontSize: SIZES.h3, fontWeight: 'bold' }

})