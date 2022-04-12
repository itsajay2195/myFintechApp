import { StyleSheet, Text, View, SafeAreaView, Animated, TouchableOpacity, Image, StatusBar } from 'react-native'
import { COLORS, PLATFORM, icons, SIZES } from '../constants'
import React, { useState } from 'react'
import SlidingUpPanel from 'rn-sliding-up-panel';
import BottomTabs from '../components/common/BottomTab'
import Header from '../components/common/Header'
import Card from '../components/debitScreen/Card';
import SlidingPaneListItem from '../components/debitScreen/SlidingPaneList';
import CurrencyCard from '../components/common/CurrencyCard';
import { useSelector } from 'react-redux';
import { selectLoading, selectSpendingLimit } from '../slices/userSlice'
import Bar from '../components/debitScreen/Bar';
import Svg, { 
  Circle, Ellipse, G, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use,  Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask 
} from 'react-native-svg'


const Home = () => {
  const [showcard, setShowCard] = useState(true)
  const loading = useSelector(selectLoading)
  const spendingLimit = useSelector(selectSpendingLimit)



  const draggableRange = {
    top: PLATFORM === 'ios' ? SIZES.height - 30 : SIZES.height - 30,
    bottom: SIZES.height / 1.5
  };



  return (
    <View style={styles.container}>
      <SafeAreaView >

        <View>
          <Header showBack={false}></Header>
        </View>

      </SafeAreaView>

      <View style={styles.debitCardTextWrapper}>
        <Text style={styles.debitCardText}>Debit Card</Text>
      </View>

      <View style={styles.debitSectionStyle}>

        <Text style={{ color: COLORS.white }}>Available balance</Text>
        <View>
          <Svg viewBox="0 0 24 24" width="21" height="21">
            <Path
              class="b"
              fill="#01d167" d="M23.5,213.333H.5a.474.474,0,0,0-.5.5v7.053a2.485,2.485,0,0,0,2.5,2.519h19a2.485,2.485,0,0,0,2.5-2.519v-7.053A.474.474,0,0,0,23.5,213.333Zm-20,4.03h4a.5.5,0,0,1,0,1.008h-4a.5.5,0,0,1,0-1.008Zm7,3.023h-7a.5.5,0,0,1,0-1.008h7a.5.5,0,0,1,0,1.008Zm8.5,0a1.68,1.68,0,0,1-1-.3,1.68,1.68,0,0,1-1,.3,2.015,2.015,0,0,1,0-4.03,1.68,1.68,0,0,1,1,.3,1.68,1.68,0,0,1,1-.3,2.015,2.015,0,0,1,0,4.03Z"
            />
            <Path
              class="b"
              fill="##01d167" d="M21.5,85.333H2.5c-1.4,0-2.5,1.378-2.5,3.132v1.253c0,.376.2.626.5.626h23c.3,0,.5-.251.5-.626V88.465C24,86.711,22.9,85.333,21.5,85.333Z"
            />
          </Svg>
        </View>

        <View style={styles.currenyInfoWrapper}>

          <CurrencyCard />

          <View>
            <Text style={styles.currencyTotalText}>{loading ? '' : `  3,000`}</Text>
          </View>

        </View>

      </View>


      <SlidingUpPanel showBackdrop={false} height={SIZES.height} animatedValue={new Animated.Value(SIZES.height / 1.5)} backdropOpacity={0} draggableRange={draggableRange}>

        <View style={styles.debitCardComponent}>

          <View style={styles.showCardButtonWrapper}>

            <TouchableOpacity style={styles.showCardButton} onPress={() => setShowCard(!showcard)}>
              <Image source={showcard ? icons.remove : icons.show} style={{ height: 15, width: 12 }} />
              <Text style={styles.showCardNumberText}>{showcard ? 'Hide Card Number' : 'Show Card Number'}</Text>
            </TouchableOpacity>

          </View>

          <Card showCard={showcard}></Card>

        </View>

        <View style={styles.slidingUpPanelStyle}>

          <View style={styles.slideupContent}>
            {spendingLimit &&
              <>
                <View style={styles.spendingLimitWrapper}>
                  <Text style={{ fontSize: 12 }}>Debit card spending limit</Text>
                  <Text style={{ color: COLORS.gray, fontSize: 12 }}><Text style={{ color: COLORS.primaryGreen, fontWeight: 'bold' }}>$345 </Text>| ${spendingLimit}</Text>
                </View>

                <View style={{ padding: 5 }}>
                  <Bar></Bar>
                </View>
              </>

            }

            <SlidingPaneListItem spendingLimit={spendingLimit}></SlidingPaneListItem>
          </View>

        </View>

      </SlidingUpPanel>

    </View>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlue,
    paddingTop: PLATFORM === "android" ? StatusBar.currentHeight : 0
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
    paddingHorizontal: 5,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showCardNumberText: {
    paddingHorizontal: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.primaryGreen
  },
  slidingUpPanelStyle: {
    flex: 1,
    padding: SIZES.padding,
    marginTop: 50,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,

  },
  slideupContent: {
    marginTop: 150
  },
  spendingLimitWrapper: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottomTabSectionStyle: {
    justifyContent: 'flex-end',


  }

})