import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InputBox = () => {
  const [Message, setMessage] = useState('');
  const onPress = () => {
    console.log('message send....');
    setMessage('');
  };
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={30} color="royalblue" />
      <TextInput
        style={styles.input}
        placeholder="Tape your message..."
        value={Message}
        onChangeText={text => setMessage(text)}
      />
      <MaterialIcons
        name="send"
        size={30}
        color="#fff"
        style={styles.send}
        onPress={onPress}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 10,
    padding: 5,
    alignItems: 'center',
  },
  input: {
    fontSize: 18,

    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 25,
    overflow: 'hidden',
  },
});
