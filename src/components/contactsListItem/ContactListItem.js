import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';
dayjs.extend(relativeTime);

const ContactListItem = ({user}) => {
  // const navigation = useNavigation();
  // console.log('Les props sont : ', chat);
  return (
    <Pressable style={styles.container}>
      <Image
        source={{
          uri: user.image,
        }}
        style={styles.image}
      />

      <Text style={styles.name}>{user.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    // backgroundColor: 'lime',
  },
  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    flex: 1,
    marginTop: 20,
  },
  subTitle: {
    color: 'gray',
  },
});
export default ContactListItem;
