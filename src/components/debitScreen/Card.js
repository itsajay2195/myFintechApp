import { StyleSheet, Text, View, Image, ActivityIndicator,Alert } from 'react-native'
import React, { useEffect } from 'react'
import { icons, COLORS, SIZES } from '../../constants'
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, setLoading, selectUserInfo, selectLoading } from '../../redux/userSlice'
import {SvgVisaLogo,SvgAspireLogo} from '../../assets/svgs'


const STATIC_CARD_INFO = {
    "available_balance":"",
    card_info:{
    "card_holder":"-----------",
    "cvv":"---",
    "thru":"--/--",
    "card_number":"---- ---- ---- ----"
    }
}

const Card = ({ showCard }) => {
  
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo) || STATIC_CARD_INFO
    const {card_holder,card_number,cvv,thru} = userInfo.card_info
    const loading = useSelector(selectLoading)
    
    useEffect(() => {
        
          
        dispatch(setLoading(true))
        const getUserInfo = async () => {
            const url = 'api/user/1'
            fetch(
                url
            ).then((res) => res.json())
                .then((json) => {
                    dispatch(setLoading(false))
                    dispatch(setUserInfo(json.data))
                }).catch(e=>{ 
                    Alert.alert("Something went wrong")
                    dispatch(setLoading(false))
                    dispatch(setError(null)) 
                    dispatch(setUserInfo(null))
                })

        }

        getUserInfo()

    }, [])

    return (
        
        <>
        
            <View style={styles.container}>
                {loading ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="small" color={COLORS.white} />
                    </View>
                    :
                    <>
                        <View style={styles.topLogo}>
                            <SvgAspireLogo color={COLORS.white}/>
                        </View>

                        <View>
                            <Text style={styles.cardHolderName}>{card_holder}</Text>
                        </View>

                        <View>
                            <Text style={[styles.cardDetails,{fontSize:SIZES.h4}]}>{showCard ? card_number : card_number.replace(/\d{4}(?= \d{4})/g, "****")}</Text>
                            <Text style={[styles.cardDetails, { fontSize: SIZES.h5 }]}>Thru:{thru}  CVV:{cvv}</Text>
                        </View>

                        <View style={styles.topLogo}>
                            <SvgVisaLogo color={COLORS.white}/>
                        </View>
                    </>

                }

            </View>



        </>

    )
}
//{!showCard ? userInfo.card_no : userInfo.card_no.replace(/\d{4}(?= \d{4})/g, "****")}

export default Card

const styles = StyleSheet.create({
    container: {
        height: 170,
        padding: SIZES.padding,
        backgroundColor: COLORS.primaryGreen,
        borderRadius: 5,
        top: -5
    },
    topLogo: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    cardHolderName: {
        paddingTop: SIZES.padding/2,
        fontSize: SIZES.h2,
        color: COLORS.white,
        fontWeight: 'bold'
    },
    cardDetails: {
        paddingTop: SIZES.padding/2,
        fontSize: SIZES.body3,
        color: COLORS.white,
        fontWeight: 'bold'
    },

})