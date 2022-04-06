import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Header from '../components/common/Header'
import { COLORS, PLATFORM, icons, SIZES } from '../constants'

const WeeklyLimit = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Header showBack={true}></Header>
      </View>

      
    </SafeAreaView>
  )
}

export default WeeklyLimit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlue,
    paddingTop: PLATFORM === "android" ? StatusBar.currentHeight : 0
  }
})