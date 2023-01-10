import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import chats from '../assets/data/chats.json';

const ContactsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({item}) => <ContactsScreen user={item.user} />}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
