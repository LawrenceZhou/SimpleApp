import React from 'react';
import { AppRegistry} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

const MapScreen = require('./MapScreen');
const ListScreen = require('./ListScreen');
const RoomScreen = require('./RoomScreen');
const MusicScreen = require('./MusicScreen');
const CreditScreen = require('./CreditScreen');

//Screens in navigator bar
const MainScreenNavigator = TabNavigator({
  Map: { screen: MapScreen },
  List: { screen: ListScreen },
  Credit: {screen: CreditScreen},
});

//Screens that can be stacked
export const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator},
  Music: {screen: MusicScreen},
  List: {screen: ListScreen},
  Room: {screen: RoomScreen},
});

MainScreenNavigator.navigationOptions = {
  title: 'Music in the Palazzo',
};

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
