import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, Dimensions, FlatList, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;



const About: React.FC = () => {

  



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.action_text_wrapper}>
                    <Text style={styles.action_text}>About this App</Text>

                </View>
            </View>
            <View style={styles.bottomSection}>
            <View style={styles.digital_pin_list_wrapper}>
                    <Text style={{ textAlign: "center" }}>React Native Arduino Bluetooth Connection</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    >
                        <Image source={require('../assets/mattosha_logo_crest.png')} style={styles.image}/>
              <View style={{paddingHorizontal:10}}>
              <Text style={{fontWeight:"900",fontSize:25}}>Why this App</Text>
               <Text>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sit pariatur perspiciatis dolor tempora fugit nesciunt cupiditate? Aliquam laudantium quo fuga dolores accusantium id ducimus, molestiae quisquam aperiam tempora placeat.
               </Text>
              </View>
                    </ScrollView>
                </View>
              

            </View>
        </SafeAreaView>
    )
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, topSection: {
        flex: 1,
    }, bottomSection: {
        flex: 6,
        paddingTop: 20,
        justifyContent: "flex-start",
        alignItems: "center",
    }, action_text_wrapper: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    action_text: {
        fontWeight: "900",
        fontSize: 24,
        marginBottom: 10,
    }, digital_pin_list_wrapper: {
        flex: 1,
        backgroundColor: "#cfc",
        width: SCREEN_WIDTH - 30,
        height: SCREEN_HEIGHT * 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    device_list: {
        flex: 1,


    },
    digital_pin_wrapper: {
        width: SCREEN_WIDTH - 50,
        height: 60,
        backgroundColor: "white",
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal:20,
    },
    image:{
        width:SCREEN_WIDTH - 30,
        height:300,
    }
});
