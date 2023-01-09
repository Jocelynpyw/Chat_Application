/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ChatScreen from './src/screens/ChatScreen';

AppRegistry.registerComponent(appName, () => ChatScreen);
