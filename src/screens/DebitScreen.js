import { StyleSheet, Text, View, SafeAreaView, Animated, TouchableOpacity,Image } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import React, { useState } from 'react'
import SlidingUpPanel from 'rn-sliding-up-panel';
import BottomTabs from '../components/common/BottomTab'
import Header from '../components/common/Header'
import Card from '../components/debit/Card';

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [ showcard, setShowCard ] = useState(true)

  const draggableRange = {
    top: Platform.OS === 'ios' ? SIZES.height - 30 : SIZES.height - 30,
    bottom: SIZES.height / 1.5
  };

  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Header showBack={false}></Header>
      </View>

      <View style={styles.debitCardTextWrapper}>
        <Text style={styles.debitCardText}>Debit Card</Text>
      </View>

      <View style={styles.debitSectionStyle}>

        <Text style={{ color: COLORS.white }}>Available balance</Text>

        <View style={styles.currenyInfoWrapper}>

          <View style={styles.currencySymbol}>
            <Text style={styles.currencySymbolText}>S$</Text>
          </View>

          <View>
            <Text style={styles.currencyTotalText}>{loading ? '' : `  3,000`}</Text>
          </View>

        </View>

      </View>


      <SlidingUpPanel showBackdrop={false} height={SIZES.height} animatedValue={new Animated.Value(SIZES.height / 1.5)} backdropOpacity={0} draggableRange={draggableRange}>

        <View style={styles.debitCardComponent}>
          <View style={styles.showCardButtonWrapper}>
            <TouchableOpacity style={styles.showCardButton} onPress={()=>setShowCard(!showcard)}>
              <Image source={showcard ? icons.remove : icons.show } style={{ height: 15, width: 12 }} />
              <Text style={styles.showCardNumberText}>{!showcard ? 'Hide Card Number' : 'Show Card Number'}</Text>
            </TouchableOpacity>
          </View>

          <Card></Card>

        </View>

        <View style={styles.slidingUpPanelStyle}>
          <Text>Hi</Text> 
        </View>

      </SlidingUpPanel>

      <View style={styles.bottomTabSectionStyle}>
        <BottomTabs />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlue
  },
  debitCardTextWrapper: {
    padding: SIZES.padding,
  },
  debitCardText: {
    fontWeight: '700',
    color: COLORS.white,
    fontSize: SIZES.h2

  },
  debitSectionStyle: {
    flex: 1,
    padding: SIZES.padding,
    backgroundColor: COLORS.primaryBlue
  },
  currenyInfoWrapper: {
    flexDirection: 'row',
    paddingTop: 10
  },
  currencySymbol: {
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: "#01D167",
    justifyContent: 'center'
  },
  currencySymbolText: {
    color: COLORS.white,
    fontSize: SIZES.font,
    fontWeight: 'bold'
  },
  currencyTotalText: {
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: '700'
  },
  debitCardComponent: {
    marginHorizontal: '5%',
    position: 'absolute',
    borderRadius: 5,
    width: '90%',
    height: 200,
    zIndex: 1

  },
  showCardButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
   
  },
  showCardButton: {
    height: 30,
    paddingHorizontal:5,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showCardNumberText:{
    paddingHorizontal:5,
    fontSize:12,
    fontWeight:'bold',
    color:COLORS.primaryGreen
  },
  slidingUpPanelStyle: {
    flex: 1,
    padding: 10,
    borderWidth: 5,
    marginTop: 50,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,

  },
  bottomTabSectionStyle: {
    justifyContent: 'flex-end'
  }

})