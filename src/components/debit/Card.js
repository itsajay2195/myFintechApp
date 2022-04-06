import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons, COLORS, SIZES } from '../../constants'

const Card = () => {
    const cardNumber = '5647 3411 2413 2020'
    const { showcard, setShowCard } = useState(false)

    return (
        <>
              

            <View style={styles.container}>
                <View style={styles.topLogo}>
                    <Image source={icons.aspireLogo} style={{ tintColor: 'white', height: 20, width: 70 }} />
                </View>

                <View>
                    <Text style={styles.cardHolderName}>Ajaykumar Rajasekaran</Text>
                </View>

                <View>
                    <Text style={styles.cardDetails}>{showcard ? cardNumber : cardNumber.replace(/\d{4}(?= \d{4})/g, "****")}</Text>
                    <Text style={[styles.cardDetails, { fontSize: SIZES.body5 }]}>Thru:12/20  CVV:456</Text>
                </View>

                <View style={styles.topLogo}>
                    <Image source={icons.visaLogo} style={{ tintColor: 'white', height: 20, width: 60 }} />
                </View>

                
                   
            
            </View>
            
            
        </>

    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        height:170,
        padding: SIZES.padding,
        backgroundColor: COLORS.primaryGreen,
        borderRadius:5,
        top:-5
    },
    topLogo: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    cardHolderName: {
        paddingTop: 10,
        fontSize: SIZES.h2,
        color: COLORS.white,
        fontWeight: 'bold'
    },
    cardDetails: {
        paddingTop: 10,
        fontSize: SIZES.body3,
        color: COLORS.white,
        fontWeight: 'bold'
    },
   
})