import {View, Text, Image, StyleSheet} from 'react-native';

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name}>Lukas</Text>
          <Text style={styles.subTitle}>07:30</Text>
        </View>

        <Text>Jocelyn Je t'aime tu sais </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    flex: 1,
  },
  subTitle: {
    color: 'lime',
  },
});
export default ChatListItem;
