import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('window');
const LandingPage = ({navigation}) => {
    return (
        <SafeAreaView
            style={styles.container}
        >
            <Image
                style={styles.landingPage}
                source={require("../../assets/images/200w.gif")}
            />
            <TouchableOpacity
            onPress={()=>{navigation.navigate("Dashboard")}}
                style={styles.button}
            >
                <LinearGradient  start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#343235','#343235', '#9a979a', '#706d70']} style={styles.linearGradient}>
                   
                        <Text style={styles.GradientsView}>Lets Go</Text>
            
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    landingPage: {
        height: height,
        width: width,
        resizeMode: "contain",
    },
    container: {
        backgroundColor: "#000000"
    },
    GradientsView: {
        height: height * 0.045,
        width: width * 0.6,
        justifyContent: "center",
        alignContent:"center",
        alignItems:"center",
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:width*0.033,
        fontWeight:"bold",
        color:"#000000"
        
    },
    button: {
        position: "absolute",
        marginTop: height * 0.8,
        alignSelf: "center",
        borderRadius: width * 0.25,
        borderRadius:10,

    },
    linearGradient:{
        borderRadius:10
    }
})