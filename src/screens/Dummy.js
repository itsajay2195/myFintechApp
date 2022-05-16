import { StyleSheet, Text, View, SafeAreaView, StatusBar,Button, useWindowDimensions } from 'react-native'
import React from 'react'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler,useSharedValue,useAnimatedStyle,withSpring } from 'react-native-reanimated'

const Dummy = () => {
    const dimensions = useWindowDimensions()
    const top = useSharedValue(dimensions.height)
    const style = useAnimatedStyle(()=>{
      return{
        top: top.value
      }
    })
    const gestureHandler = useAnimatedGestureHandler({})
  return (
    <SafeAreaView style={{paddingTop: StatusBar.currentHeight}}>
      <Text>Dummy</Text>
      <Button title="click" style={{height:50,width:50}} onPress={()=>top.value= withSpring(
        dimensions.height/2,
        {
          damping:80,
          overshootClamping:true,
          restDisplacementThreshold:0.1,
          restSpeedThreshold:0.1,
          stiffness:500 
        } //half of the screen 
      )}/>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[{
          position:'absolute',
          left:0,
          right:0,
          bottom:0,
          backgroundColor:'white',
          borderTopLeftRadius:20,
          borderBottomRightRadius:20,
          shadowColor:'#000',
          shadowOffset:{
            width:0,
            height:2
          },
          shadowOpacity:0.25,
          shadowRadius:3.84,
          elevation:5,
          padding:20,
          justifyContent:'center',
          alignItems:'center'
        },style]}>
          <Text>Sheet </Text>
        </Animated.View>
      </PanGestureHandler>
    </SafeAreaView>
  )
}

export default Dummy

const styles = StyleSheet.create({})