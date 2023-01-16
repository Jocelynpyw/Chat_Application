/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ChatScreen from './src/screens/ChatScreen';
import ContactsScreen from './src/screens/ContactsScreen';

AppRegistry.registerComponent(appName, () => ContactsScreen);
