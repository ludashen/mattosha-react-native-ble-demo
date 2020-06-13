import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, Dimensions, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const devices = [
    { id: "1", device_name: "Techno camon x" },
    { id: "2", device_name: "Infinix  x" },
    { id: "3", device_name: "Samsung A" },
    { id: "4", device_name: "Iphone  x" },
    { id: "5", device_name: "jc ckcnkdkkndsd" },
    { id: "6", device_name: "Techno camon x" },
    { id: "7", device_name: "Infinix  x" },
    { id: "8", device_name: "Samsung A" },
    { id: "9", device_name: "Iphone  x" },
    { id: "10", device_name: "jc ckcnkdkkndsd" },
];

const DigitalOutput: React.FC = () => {

  
    const [isPinOneEnabled, setIsPinOneEnabled] = useState(false);
    const [isPinTwoEnabled, setIsPinTwoEnabled] = useState(false);
    const [isPinThreeEnabled, setIsPinThreeEnabled] = useState(false);
    const [isPinFourEnabled, setIsPinFourEnabled] = useState(false);
    const [isPinFiveEnabled, setIsPinFiveEnabled] = useState(false);

    const toggleSwitch = (pin:string) => {
        switch (pin) {
            case 'one':
                setIsPinOneEnabled(previousState => !previousState)
                break;
            case 'two':
                setIsPinTwoEnabled(previousState => !previousState)
                break;
            case 'three':
                setIsPinThreeEnabled(previousState => !previousState)
                break;
            case 'four':
                setIsPinFourEnabled(previousState => !previousState)
                break;
            case 'five':
                setIsPinFiveEnabled(previousState => !previousState)
                break;
        
            default:
                break;
        }
       
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.action_text_wrapper}>
                    <Text style={styles.action_text}> Digital Output Control</Text>

                </View>
            </View>
            <View style={styles.bottomSection}>

                <View style={styles.digital_pin_list_wrapper}>
                    <Text style={{ textAlign: "center" }}>Toggle the output pins</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    >
                        <View style={styles.digital_pin_wrapper}>
                            <Text>Digital pin one</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isPinOneEnabled ? "#0c0" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={()=>toggleSwitch('one')}
                                value={isPinOneEnabled}
                                
                            />
                        </View>
                        <View style={styles.digital_pin_wrapper}>
                            <Text>Digital pin two</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isPinTwoEnabled ? "#0c0" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={()=>toggleSwitch('two')}
                                value={isPinTwoEnabled}
                                
                            />
                        </View>
                        <View style={styles.digital_pin_wrapper}>
                            <Text>Digital pin three</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isPinThreeEnabled ? "#0c0" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={()=>toggleSwitch('three')}
                                value={isPinThreeEnabled}
                                
                            />
                        </View>
                        <View style={styles.digital_pin_wrapper}>
                            <Text>Digital pin four</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isPinFourEnabled ? "#0c0" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={()=>toggleSwitch('four')}
                                value={isPinFourEnabled}
                                
                            />
                        </View>
                        <View style={styles.digital_pin_wrapper}>
                            <Text>Digital pin five</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isPinFiveEnabled ? "#0c0" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={()=>toggleSwitch('five')}
                                value={isPinFiveEnabled}
                                
                            />
                        </View>
                    </ScrollView>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default DigitalOutput;

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
