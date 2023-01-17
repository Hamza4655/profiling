import { Image, StyleSheet, Text, View,Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('window');
const Details = () => {
  return (
    <SafeAreaView
    style={{backgroundColor:"#000000",height:height}}
    >
        
      <Image
      style={{height:height*0.45,width:width,resizeMode:"cover"}}
      source={require("../../assets/images/mobile.gif")}
      />
    </SafeAreaView>
    
  )
}

export default Details

const styles = StyleSheet.create({})