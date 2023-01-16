import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import chats from '../assets/data/chats.json';
import ContactListItem from '../components/contactsListItem/ContactListItem';

const ContactsScreen = () => {
  return (
    <View>
      <FlatList
        data={chats}
        renderItem={({item}) => <ContactListItem user={item.user} />}
        style={{backgroundColor: 'white'}}
      />
      <Text>Je suis la</Text>
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
