import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from './src/constants/colors';
import Navigator from './src/navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.app.primary,
    backgroundColor: 'whitesmoke',
    flex: 1,
    paddingVertical: 2,
  },
});
