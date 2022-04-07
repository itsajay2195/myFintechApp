import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons, COLORS, SIZES } from '../../constants'

const tagsList = [
    { id: 1, value: '5,000' },
    { id: 2, value: '10,000' },
    { id: 3, value: '15,000' }
]

const Tags = ({setLimit}) => {
    return (
        <>
            {tagsList.map(item => <Tag key={item.id} value={item.value} setLimit={setLimit} />)}

        </>
    )
}

export default Tags

const Tag = ({value,setLimit}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>setLimit(value)}>
            <Text style={styles.currencyText}>S$ {value}</Text>
        </TouchableOpacity>
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