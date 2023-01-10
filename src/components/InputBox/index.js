import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InputBox = () => {
  return (
    <View>
      <AntDesign name="home" size={90} color="#900" />

      {/* <FontAwesome5 name="plus" key={123} size={20} color="yellow" /> */}
      <Text>InputBox</Text>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({});
