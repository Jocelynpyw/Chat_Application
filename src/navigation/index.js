import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ChatScreen from '../screens/ChatScreen';
import ChatsScreens from '../screens/ChatsScreens';
import ContactsScreen from '../screens/ContactsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigation';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: 'whitesmoke'}}}>
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen
          name="Contact"
          component={ContactsScreen}
          options={{title: 'New Chat'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
