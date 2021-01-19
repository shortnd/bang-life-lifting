import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'

import * as firebase from 'firebase'
import useUser from './hooks/useUser';

const firebaseConfig = {}
if (firebase.app.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

type RootStackParamList = {
  Home: undefined,
  Login: undefined,
  Register: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  const user = useUser(state => state.user)
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        {user ? (
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
