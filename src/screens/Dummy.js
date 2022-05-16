import { StyleSheet, Text, View, SafeAreaView, StatusBar, Button, useWindowDimensions } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated'

const Dummy = () => {
  const dimensions = useWindowDimensions()
  const top = useSharedValue(
    dimensions.height
  )
  const style = useAnimatedStyle(() => {
    return {
      top: top.value
    }
  })
  const gestureHandler = useAnimatedGestureHandler({
    onActive(e) {
      top.value = e.translationY;
    }
  })
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <Button title="click" onPress={() => top.value = withSpring(
          dimensions.height / 2,//half of the screen 
          {
            damping: 80,
            overshootClamping: true,
            restDisplacementThreshold: 0.1,
            restSpeedThreshold: 0.1,
            stiffness: 500
          }
        )} />
        <GestureHandlerRootView style={{ width: '100%', height: '70%' }}>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'red',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              shadowColor: 'black',
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }, style]}>
              <Text>Sheet </Text>
            </Animated.View>
          </PanGestureHandler>

        </GestureHandlerRootView>

      </View>
    </>

  )
}

export default Dummy

const styles = StyleSheet.create({})