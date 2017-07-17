import React from 'react';
import { AppRegistry} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

const MapScreen = require('./MapScreen');
const TourScreen = require('./TourScreen');
const RoomScreen = require('./RoomScreen');

const RoomAboutScreen = require('./RoomAboutScreen');
const AboutScreen = require('./AboutScreen');

//Screens in navigator bar
const MainScreenNavigator = TabNavigator({
  Map: { screen: MapScreen },
  Tour: { screen: TourScreen },
  About: {screen: AboutScreen},
});

//Screens that can be stacked
export const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator},

  Tour: {screen: TourScreen},
  Room: {screen: RoomScreen},
  RoomAbout: {screen: RoomAboutScreen},

},
{ 
    headerMode: 'screen' 
  });

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
