import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
TouchableHighlight,
Image,
  Navigator,
  View,
  Button,
  StatusBar,
} from 'react-native';
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';



class MusicInfoScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
    headerTintColor: "#FFF",
    headerStyle : styles.background,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.listContainer}>

        <Text  style={ styles.songTitle }>
      {params.room.intro}
      </Text>
      <Image source={{uri: "https://s3-us-west-2.amazonaws.com/museumpalazzo/altemps-tota-pulchra-tenor1.jpg",
                        width: 960,
                        height: 1388}}/>
       <Image source={{uri: "https://s3-us-west-2.amazonaws.com/museumpalazzo/miserere-48-memorare-tenor2.jpg",
       width: 838,
       height: 420}}/>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  background: {
    backgroundColor: "#000",

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

  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 0,
  },

  artistBg: {
    width: window.width,
    height: 112,
  },

  title: {
    color: "#FFF",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 5
  },

  info: {
    color: "#CCC",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "300",
    fontSize: 14
  },

  listContainer: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: '#fff',
  },

  welcomeSub: {
    fontSize: 12,
    textAlign: 'right',
    marginTop: 2,
    marginRight: 10,
    marginBottom: 10,
    color: '#fff',
  },

  logoContainer1: {
    position: "absolute",
    top: 445, 
    left: 10,
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
   logoContainer2: {
    position: "absolute",
    top: 442, 
    left: 135,
    width: 105,
    height: 105,
    resizeMode: "cover",
  },
  logoContainer3: {
    position: "absolute",
    top: 430, 
    left: 245,
    width: 130,
    height: 130,
    resizeMode: "cover",
  },

    songTitle: {
    color: "white",
    fontFamily: "Helvetica Neue",
    marginBottom: 5,
  },

});

module.exports = MusicInfoScreen;