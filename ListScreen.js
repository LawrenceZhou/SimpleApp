import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
TouchableHighlight,
Image,
  Navigator,
  View,
  Button
} from 'react-native';
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { Rooms } from './songData';

//List Screen
//This screen lists all the room, which is an alternative way to get into the Room Screen.
class ListScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: ({ tintColor, focused }) => (
      <Text style = {styles.tabBarText}>
      Room List
      </Text>
    ),
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-list-box' : 'ios-list-box-outline'}
          size={32}
          style={styles.tabBarIcon}
        />
      ),
  };

  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows( Rooms ),
    }
  }

  render() {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.welcome}>
          Rooms
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(room, bgPic, rowId) => 
            <TouchableHighlight activeOpacity={ 100 } onPress = {() => this.props.navigation.navigate('Room', { room: room })}underlayColor="#ea4b54">
        <Image
          style={ styles.roomBg }
          resizeMode='cover'
          source={{uri: room.background}}
        >
        <View style={ styles.container }>
          <Text style={ styles.roomName }>{room.name }</Text>
          <Text style={ styles.roomSongs }>{room.songs.length } songs</Text>
        </View>
        </Image>
      </TouchableHighlight>}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingTop: 20,
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },

  roomBg: {
    width: window.width,
    height: 112,
  },

  roomName: {
    color: "#FFF",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 5
  },

  roomSongs: {
    color: "#CCC",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "300",
    fontSize: 14
  },

  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#111',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
});

module.exports = ListScreen;