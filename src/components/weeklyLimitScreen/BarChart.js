import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { VictoryChart, VictoryTheme, VictoryBar } from "victory-native";
import { useDispatch, useSelector } from 'react-redux';
import { SIZES, COLORS } from '../../constants';
import { setLoading, setExpenseInfo, selectLoading, selectExpenseInfo } from '../../redux/userSlice'

const BarChart = () => {
    const dispatch = useDispatch();
    const expenseInfo = useSelector(selectExpenseInfo)
    const loading = useSelector(selectLoading)
    const data = [{ "month": "Dec", "expense": 6000 }, { "month": "Jan", "expense": 8000 }, { "month": "Feb", "expense": 12000 }, { "month": "Mar", "expense": 4000 }]

    useEffect(() => {
        dispatch(setLoading(true))
        const getUserInfo = async () => {
            const url = 'https://run.mocky.io/v3/532f01a2-7a70-4c3e-9551-ebc9096653fe'
            fetch(
                url
            ).then((res) => res.json())
                .then((data) => {
                    dispatch(setLoading(false))
                    dispatch(setExpenseInfo(data))
                })

        }

        getUserInfo()

    }, [])
    return (
        <>
            {loading ?
                <View style={{ marginTop: 20, justifyContent: 'center', alignSelf: 'center' }}>
                    <ActivityIndicator size="small" color={COLORS.primaryGreen} />
                </View>

                :
                <VictoryChart domainPadding={10} width={SIZES.width - 100} theme={VictoryTheme.material} animate={{
                    onLoad: { duration: 1000 },
                    duration: 1000,
                    easing: "bounce"
                }}
                >
                    <VictoryBar style={{ data: { fill: "#20D167" } }} data={expenseInfo} x="month" y="expense" />
                </VictoryChart>}
        </>

    )
}

export default BarChart

const styles = StyleSheet.create({})