import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { icons, COLORS, SIZES } from '../../constants'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setUserInfo, setLoading, selectUserInfo, selectLoading,setSpendingLimit } from '../../slices/userSlice'

const Card = ({ showCard }) => {
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo)
    const loading = useSelector(selectLoading)


    useEffect(() => {
        dispatch(setLoading(false))
        const getUserInfo = async () => {
            const url = 'https://run.mocky.io/v3/4ac50104-54ac-42c4-8f6b-fa385ce3b6d1'
            fetch(
                url
            ).then((res) => res.json())
                .then((data) => {
                    dispatch(setLoading(false))
                    dispatch(setUserInfo(data))
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
                            <Image source={icons.aspireLogo} style={{ tintColor: 'white', height: 20, width: 70 }} />
                        </View>

                        <View>
                            <Text style={styles.cardHolderName}>{userInfo.username}</Text>
                        </View>

                        <View>
                            <Text style={styles.cardDetails}>{showCard ? userInfo.card_no : userInfo.card_no.replace(/\d{4}(?= \d{4})/g, "****")}</Text>
                            <Text style={[styles.cardDetails, { fontSize: SIZES.body5 }]}>Thru:{userInfo.thru}  CVV:{userInfo.cvv}</Text>
                        </View>

                        <View style={styles.topLogo}>
                            <Image source={icons.visaLogo} style={{ tintColor: 'white', height: 20, width: 60 }} />
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