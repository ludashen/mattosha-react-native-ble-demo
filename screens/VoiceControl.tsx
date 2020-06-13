import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, Dimensions, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;



const VoiceControl: React.FC = () => {

  



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.action_text_wrapper}>
                    <Text style={styles.action_text}> Voice Control</Text>

                </View>
            </View>
            <View style={styles.bottomSection}>

              

            </View>
        </SafeAreaView>
    )
}

export default VoiceControl;

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
        backgroundColor: "#0c0",
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

    }
});
