import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import chats from '../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';

const ChatsScreens = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({item}) => <ChatListItem chat={item} />}
    />
  );
};

export default ChatsScreens;

const styles = StyleSheet.create({});
