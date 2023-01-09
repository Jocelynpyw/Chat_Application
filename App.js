import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from './src/constants/colors';
import ChatListItem from './src/components/ChatListItem';

const App = () => {
  return (
    <View style={styles.container}>
      <ChatListItem />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.app.primary,
    flex: 1,
  },
});
