import React from 'react';
import { StyleSheet, Text, Image, View, Navigator, ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { Rooms } from './songData';

//Map Screen(Floor Plan)
//A touchable map to get into the rooms as an alternative way of List.
class MapScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: ({ tintColor, focused }) => (
      <Text style = {styles.tabBarText}>
      Map
      </Text>
    ),
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-map' : 'ios-map-outline'}
          size={32}
          style={styles.tabBarIcon}
        />
      ),

  };
    render() {
    return( 
    <View style={styles.container}>
        <ScrollView>
          <Text style={styles.getStartedText}>
              Museum Map
            </Text>
          <View style={styles.welcomeContainer}>
            <TouchableHighlight activeOpacity={ 100 } onPress = {(evt) => this.handlePress(evt)}>
            <Image
              source={require('./assets/images/altemps-map.jpg')}
              style = {styles.mapContainer}/>
          </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    )
  }

  handlePress(evt){
    if(evt.nativeEvent.locationX > 100 && evt.nativeEvent.locationX < 230 &&
       evt.nativeEvent.locationY > 180 && evt.nativeEvent.locationY < 360 ){
      this.props.navigation.navigate('Room', { room: Rooms[0] });
    }

    if(evt.nativeEvent.locationX > 20 && evt.nativeEvent.locationX < 140 &&
       evt.nativeEvent.locationY > 10 && evt.nativeEvent.locationY < 140 ){
      this.props.navigation.navigate('Room', { room: Rooms[1] });
    }

    if(evt.nativeEvent.locationX > 140 && evt.nativeEvent.locationX < 160 &&
       evt.nativeEvent.locationY > 100 && evt.nativeEvent.locationY < 150 ){
      this.props.navigation.navigate('Room', { room: Rooms[3] });
    }

    if(evt.nativeEvent.locationX > 165 && evt.nativeEvent.locationX < 245 &&
       evt.nativeEvent.locationY > 100 && evt.nativeEvent.locationY < 150 ){
      this.props.navigation.navigate('Room', { room: Rooms[2] });
    }

    if(evt.nativeEvent.locationX > 250 && evt.nativeEvent.locationX < 280 &&
       evt.nativeEvent.locationY > 100 && evt.nativeEvent.locationY < 150 ){
      this.props.navigation.navigate('Room', { room: Rooms[4] });
    }

  }
}
module.exports = MapScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },

  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  getStartedText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    color: '#fff',
  },

  tabBarText: {
    fontSize: 10,
    textAlign: 'center',
    paddingBottom: 4,
    color: '#840B0F',
  },

  tabBarIcon: {
    color: '#840B0F',
  },

  mapContainer: {
    flex: 1,
    width: 360,
    height: 480,
    resizeMode: "cover",
  },
});

