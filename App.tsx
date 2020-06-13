import React from 'react';
import { StyleSheet, View } from 'react-native';

//Icons
import { Ionicons ,MaterialCommunityIcons } from '@expo/vector-icons'

//Packages
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import Home from './screens/Home';
import DigitalOutput from './screens/DigitalOutput';
import VoiceControl from './screens/VoiceControl';
import About from './screens/About';


//Tab Navigation
const TabMenu = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <TabMenu.Navigator
        screenOptions={({ route }: any) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconName;

            if (route.name === 'Home') {
            return focused ? <MaterialCommunityIcons name="bluetooth-connect" size={24} color="blue"/> :<MaterialCommunityIcons name="bluetooth-connect" size={24} color="#333"/>
            } else if (route.name === 'DigitalOutput') {
              return focused ? <MaterialCommunityIcons name="transit-connection" size={24} color="red"/> :<MaterialCommunityIcons name="transit-connection" size={24} color="#333"/>
            }
            else if (route.name === 'VoiceControl') {
              return focused ? <MaterialCommunityIcons name="voice" size={24} color="orange"/> :<MaterialCommunityIcons name="voice" size={24} color="#333"/>
            }
            else if (route.name === 'About') {
              return focused ? <MaterialCommunityIcons name="information-outline" size={24} color="green"/> :<MaterialCommunityIcons name="information" size={24} color="#333"/>
            }

          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: '#333',
        }}
        initialRouteName="Home"
      >
        <TabMenu.Screen name="Home" component={Home} />
        <TabMenu.Screen name="DigitalOutput" component={DigitalOutput} />
        <TabMenu.Screen name="VoiceControl" component={VoiceControl} />
        <TabMenu.Screen name="About" component={About} />

      </TabMenu.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
