import { StyleSheet, } from 'react-native'
import React from 'react'
import {  VictoryChart, VictoryTheme, VictoryBar } from "victory-native";
import { SIZES } from '../../constants'; 

const BarChart = () => {
   const  data=[{"month":"Dec","expense":6000},{"month":"Jan","expense":8000},{"month":"Feb","expense":12000},{"month":"Mar","expense":4000}]
  return (
    <VictoryChart domainPadding={10} width={SIZES.width-100} theme={VictoryTheme.material} animate={{
        onLoad: { duration: 1000 },
        duration: 1000,
        easing: "bounce"
      }}
      >
        <VictoryBar style={{ data: { fill: "#20D167" } }} data={data} x="month" y="expense" />
      </VictoryChart>
  )
}

export default BarChart

const styles = StyleSheet.create({})