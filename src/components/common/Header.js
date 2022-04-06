import { StyleSheet, Text, View, Image } from 'react-native'
import {icons,COLORS} from '../../constants'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = ({showBack}) => {
  return (
    <View style={styles.container}>
        
        <View style={styles.iconWrapper}>
                { showBack && <MaterialCommunityIcons name="chevron-left" size={30} color="#fff" />}
        </View>
        
        <View style={styles.iconWrapper}>
                 <Image source={icons.logo} style={styles.iconStyle} />
        </View>
       
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        height:40,
        backgroundColor:COLORS.primaryBlue
    },
    iconWrapper:{
        justifyContent:'center',
        alignItems:'center'
    },
    iconStyle:{
        height:20,
        width:20
    }
})