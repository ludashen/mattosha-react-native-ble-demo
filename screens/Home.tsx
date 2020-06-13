import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Switch, Dimensions, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
// import BluetoothSerial from 'react-native-bluetooth-serial'

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

const Home: React.FC = () => {

    const [numberOfScannedDevices, setnumberOfScannedDevices] = useState(0);
    const [availableDevices, setavailableDevices] = useState([]);
    const [unpairedDevices, setunpairedDevicess] = useState([]);
    const [connected, setconnected] = useState(false);
    const [discovering, setdiscovering] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        // Promise.all([
        //     BluetoothSerial.isEnabled(),
        //     BluetoothSerial.list()
        // ]).then((values) => {
        //         const [isEnabled, devices] = values;
        //         setIsEnabled(isEnabled);
        //         setavailableDevices((prev) => {
        //             return [...prev, ...devices]
        //         });

        //     });

        // BluetoothSerial.on('bluetoothEnabled', () => {

        //     Promise.all([
        //         BluetoothSerial.isEnabled(),
        //         BluetoothSerial.list()
        //     ])
        //         .then((values) => {
        //             const [isEnabled, devices] = values;
        //             setavailableDevices((prev) => {
        //                 return [...prev, ...devices]
        //             });
        //         });

            // BluetoothSerial.on('bluetoothDisabled ', () => {

            //     setavailableDevices([]);

            // });

            // BluetoothSerial.on('connectionLost', (err) => console.log(`Error: ${err.message}`))
        // })

    }, []);

    // const enable = () => {
    //     BluetoothSerial.enable()
    //         .then((res) => setIsEnabled(true))
    //     // .catch((err) => Toast.showShortBottom(err.message))
    // }

    // const disable = () => {
    //     BluetoothSerial.disable()
    //         .then((res) => setIsEnabled(false))
    //     // .catch((err) => Toast.showShortBottom(err.message))
    // }

    // const toggleBluetooth = (value) => {
    //     if (value === true) {
    //         enable()
    //     } else {
    //         disable()
    //     }
    // }

    // const _renderItem = (item) => {

    //     return (
    //         <TouchableOpacity >
    //             <View style={styles.device_wrapper}>
    //                 <Text>{item.item.name}</Text>
    //             </View>
    //         </TouchableOpacity>
    //     )
    // }

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.action_text_wrapper}>
                    <Text style={styles.action_text}>{isEnabled ? "Bluetooth is on" : "Turn on Bluetooth"}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#0c0" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <View style={styles.bottomSection}>

                <View style={styles.devices_list_wrapper}>
                    <Text style={{ textAlign: "center" }}>{numberOfScannedDevices} Devices Found</Text>
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    >
                        {
                            devices.map((item,index) => (
                                <TouchableOpacity key={index}>
                                    <View style={styles.device_wrapper}>
                                        <Text>{item.device_name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                            )
                        }
                    </ScrollView>
                    {/* <FlatList
                        style={{ flex: 1 }}
                        data={availableDevices}
                        keyExtractor={item => item.id}
                        renderItem={(item) => _renderItem(item)}
                    /> */}
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Home;

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
    }, devices_list_wrapper: {
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
    device_wrapper: {
        width: SCREEN_WIDTH - 50,
        height: 60,
        backgroundColor: "white",
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,

    }
});
