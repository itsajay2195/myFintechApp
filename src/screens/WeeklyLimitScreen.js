import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import Header from '../components/common/Header'
import { COLORS, PLATFORM, icons, SIZES } from '../constants'
import CurrencyCard from '../components/common/CurrencyCard'

const WeeklyLimit = () => {
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
          <Text style={{paddingHorizontal:SIZES.padding}}>5,000</Text>
        </View>

        <View style={styles.line}/>

        <View>
            <Text style={{  color: COLORS.gray, fontSize: 12 }} numberOfLines={2}>Here weekly means the last 7 days- not the calendar week</Text>
        </View>

      </View>

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
    paddingVertical:15,
   
    
  }

})