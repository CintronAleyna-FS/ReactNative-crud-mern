import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from './Dashboard'
import Categories from './Categories'

import Heading from './components/Heading'
import ListContainer from './components/ListContainer'

import styles from './appStyles'

function HomeScreen({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.largeHeading, styles.lightGolden]}>Welcome to Tech Store</Text>
      {/* <Heading level="3">Welcome to Tech Store</Heading> */}
      <Button style={styles.golden} title='Dashboard' onPress={() => navigation.navigate('Dashboard')} />
      <ListContainer />
      {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();
export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options = {{title: 'Tech Store'}} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}