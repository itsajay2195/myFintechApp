import { StyleSheet, Text, View, SafeAreaView, StatusBar,Button, useWindowDimensions } from 'react-native'
import React from 'react'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { useAnimatedGestureHandler } from 'react-native-reanimated'

const Dummy = () => {
    const dimensions = useWindowDimensions()
    const gestureHandler = useAnimatedGestureHandler({})
  return (
    <SafeAreaView style={{paddingTop: StatusBar.currentHeight}}>
      <Text>Dummy</Text>
      <Button title="click" style={{height:50,width:50}} onPress={()=>console.warn("hi")}/>
    </SafeAreaView>
  )
}

export default Dummy

const styles = StyleSheet.create({})