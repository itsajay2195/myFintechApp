import { StyleSheet, Text, View, Animated,SafeAreaView, StatusBar,Dimensions, Button, useWindowDimensions } from 'react-native'
import React,{useState} from 'react'


const { height,width } = Dimensions.get('window');
const Dummy = () => {
 

  return (

    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hi</Text>
      <BottomSheer/>

    </View>


  )
}

const BottomSheer =()=>{
  const [alignment] = useState(new Animated.Value(0))
  const actionSheetInterpolate = alignment.interpolate({
    inputRange:[0,1],
    outputRange:[-height /2.4 ,0]
  })

  const actionSheetstyle = {
    transform:[{ translateY:actionSheetInterpolate}
     
    ]
  }
  return(
    <Animated.View style={[
        {
          position:'absolute',
          backgroundColor:'red',
          height: height/2.4,
          left:0,
          right:0,
          bottom:0,
          width:width/1.05,
          borderTopRightRadius:40,
          marginHorizontal:10
        },
        actionSheetstyle
      ]
    }>

    </Animated.View>
  )
}

export default Dummy

const styles = StyleSheet.create({})