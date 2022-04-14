import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
import PrimaryButton from './PrimaryButton'

const ComingSoon = () => {
  const navigation = useNavigation()
  const onBtnClick = () => {
    navigation.navigate("Debit Card")
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white }}>
      <LottieView
        autoPlay
        speed={3}
        style={{
          width: 400,
          height: 400,
          backgroundColor: '#eee',
        }}
        source={require('../../assets/lottie/coming-soon.json')}
      // OR find more Lottie files @ https://lottiefiles.com/featured
      // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
      <View style={{ width: '100%', paddingVertical: 20 }} >
        <PrimaryButton btnText={"Go to Debit Card"} onPress={onBtnClick} />
      </View>

    </View>
  );
}

export default ComingSoon

const styles = StyleSheet.create({})