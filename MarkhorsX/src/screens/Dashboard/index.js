import { StyleSheet, Text, View, Dimensions, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('window');
const Dashboard = ({navigation}) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'React Js ',
            image: require("../../assets/images/js.png"),
            type: "Web App development"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'React Native',
            image: require("../../assets/images/native.png"),
            type: "Mobile App development"
        },
        {
            id: '3ac68a605-48d3-a4f8-fbd91aa97f63',
            title: 'Web Developer',
            image: require("../../assets/images/web.png"),
            type: "Font End Development"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Node.js',
            image: require("../../assets/images/node.png"),
            type: "Backend Development"
        },
        {
            id: '58694a0f-3d471f-bd96-145571e29d72',
            title: 'Laravel',
            image: require("../../assets/images/laravel.png"),
            type: "Backend Development"
        },
        {
            id: 'bdea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Video Editor',
            image: require("../../assets/images/video.png"),
            type: "All type video editors"
        },

        {
            id: '58694a0f-3a1-471f-bd96-145571e29d72',
            title: 'Designer',
            image: require("../../assets/images/adobe.png"),
            type: "Designing"
        },

    ];
    const Item = ({ item }) => (
        <TouchableOpacity
        onPress={()=>{navigation.navigate("Details")}}
            style={styles.container}>
            <Image
                style={{
                    height: height * 0.08,
                    width: height * 0.08,
                    resizeMode: "contain",
                    // alignSelf:"flex-end",
                    backgroundColor: "black",
                    borderRadius: width * 0.025,
                    padding: width * 0.015,
                    margin: height * 0.025
                }}
                source={item.image}
            />
            <Text
                style={{
                    color: "white",
                    fontSize: width * 0.055,
                    marginLeft: width * 0.03
                }}
            >{item?.title}</Text>
            <Text
                style={{
                    color: "#150000",
                    fontSize: width * 0.033,
                    marginLeft: width * 0.03
                }}
            >
                {item?.type}
            </Text>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#343235', '#343235', '#9a979a', '#706d70']}
                style={styles.linearGradient}>


            </LinearGradient>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView
            style={{ backgroundColor: "black", height: height }}
        >
            {/* <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#343235', '#343235', '#9a979a', '#706d70']}
                style={styles.linearGradient}>


            </LinearGradient> */}
            <Text
                style={{
                    color: "white",
                    fontSize: width * 0.2,
                    padding: width * 0.025,
                    marginTop: height * 0.025,
                    marginBottom: -height * 0.28,
                    textAlign: "center",
                    fontWeight: "100"
                }}
            >
                Our Services
            </Text>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#343235', '#343235', '#9a979a', '#706d70']}
                style={{
                    height: height * 0.005,
                    marginTop: height * 0.3,
                    marginBottom: -height * 0.28,
                }}>


            </LinearGradient>
            <FlatList
                data={DATA}
                renderItem={Item}
                keyExtractor={item => item.id}
                horizontal
            />


        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    linearGradient: {
        height: height * 0.01, marginTop: height * 0.012
    },
    // profile: {
    //     resizeMode: "contain",
    //     height: height * 0.152,
    //     width: width * 0.29,
    //     alignSelf: "center",
    //     backgroundColor: "rgba(255, 255, 255, 0.33)",
    //     borderRadius:width*0.5,
    //     marginTop:-height*0.1,
    //     position:"absolute",
    // },
    container: {
        height: height * 0.25,
        backgroundColor: "rgba(255, 255, 255, 0.33)",
        width: width * 0.6,
        alignSelf: "center",
        margin: height * 0.02,
        borderRadius: width * 0.032,

    }
})