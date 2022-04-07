import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons, COLORS, SIZES } from '../../constants'

const tagsList = [
    { id: 1, value: '5,000' },
    { id: 2, value: '10,000' },
    { id: 3, value: '15,000' }
]

const Tags = () => {
    return (
        <>
            {tagsList.map(item => <Tag key={item.id} value={item.value} />)}

        </>
    )
}

export default Tags

const Tag = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.currencyText}>S$ 5,000</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: COLORS.secondaryGreen
    },
    currencyText: {
        fontSize: SIZES.h5,
        color: COLORS.lightGreen,
        fontWeight: 'bold'
    }
})