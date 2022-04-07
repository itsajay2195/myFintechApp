import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { COLORS } from '../../constants'

const Bar=() =>{
  
    return (
      <View >
        <View style={styles.triangleCornerLayer}></View>
         <View style={styles.triangleCorner1}></View>

      </View>
    );
  
}

export default Bar

const styles = StyleSheet.create({
 triangleCorner1: {
   
    
    left:0,
    width: `${Math.floor(354*100/5000)}%`,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderRightColor: 'transparent',
    borderTopColor:COLORS.lightGreen,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
  },triangleCornerLayer: {
    position: 'absolute',
    left:0,
    width:'100%',
    borderStyle: 'solid',
    borderRightWidth: 0,
    borderTopWidth: 20,
    borderRightColor: 'transparent',
    borderTopColor: COLORS.secondaryGreen,
    borderBottomRightRadius:10,
    borderTopRightRadius:10
    
    
  }
});
