import React, { useState } from 'react'
import { View, Text,Image,TouchableOpacity,Alert, StyleSheet } from 'react-native'
import {icons, COLORS,PLATFORM} from '../../constants'

export default function BottomTabs() {
    const[activeTab,setActiveTab] = useState('Debit');
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>{Alert.alert('Coming Soon')}}  style={styles.iconWrapper}>
            <Image source={icons.logo} style={[ styles.iconStyle,{ tintColor: activeTab ==='Home' ? COLORS.primaryGreen : COLORS.gray}]} />
            <Text style={styles.iconNameText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>setActiveTab('Debit')}  style={styles.iconWrapper}>
            <Image source={icons.card} style={[ styles.iconStyle,{ tintColor: activeTab ==='Debit' ? COLORS.primaryGreen : COLORS.gray}]}/>
            <Text style={styles.iconNameText}>Debit Card</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{Alert.alert('Coming Soon')}}  style={styles.iconWrapper}>
            <Image source={icons.payments} style={styles.iconStyle} />
            <Text style={styles.iconNameText}>Payments</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{Alert.alert('Coming Soon')}}  style={styles.iconWrapper}>
            <Image source={icons.credit} style={styles.iconStyle}  />
            <Text style={styles.iconNameText}>Credit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{Alert.alert('Coming Soon')}}  style={styles.iconWrapper}>
            <Image source={icons.account} style={styles.iconStyle}  />
            <Text style={styles.iconNameText}>Profile</Text>
          </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{height:PLATFORM === 'android' ?50 : 100,flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: COLORS.white },
    iconWrapper:{ justifyContent: 'center',alignItems:'center'},
    iconStyle:{ tintColor: COLORS.gray, height: 20, width: 20 },
    iconNameText:{fontSize:10,color: COLORS.gray}
    

})