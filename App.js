import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from './src/constants/colors';
import ChatListItem from './src/components/ChatListItem';
import ChatsScreens from './src/screens/ChatsScreens';

const App = () => {
  return (
    <View style={styles.container}>
      <ChatsScreens />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.app.primary,
    flex: 1,
    paddingVertical: 10,
  },
});
