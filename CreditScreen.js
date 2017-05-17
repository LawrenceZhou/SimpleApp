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


//Credit Screen
//Five parts:
//APP Design
//Research
//Coordination
//Collaboration
//Logos
class CreditScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: ({ tintColor, focused }) => (
      <Text style = {styles.tabBarText}>
      Credit
      </Text>
    ),
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'}
          size={32}
          style={styles.tabBarIcon}
        />
      ),
  };

  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows( creditInfo ),
    }
  }

  render() {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.welcome}>
          Music and Architecture
        </Text>
        <Text style={styles.welcomeSub}>
          in the house of Giovanni Angelo Altemps
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(creditinfo) =>
          <View style={ styles.container }> 
         <Text  style={ styles.title }>{creditinfo.title } </Text>
         <Text  style={ styles.info }>{creditinfo.info } </Text>
         </View>}/>

         <Image
              source={require('./assets/images/museo-logo.png')}
              style = {styles.logoContainer1}/>
        <Image
              source={require('./assets/images/aar-logo.png')}
              style = {styles.logoContainer2}/>
        <Image
          source={require('./assets/images/su-logo.png')}
          style = {styles.logoContainer3}/>

      </View>
    );
  }
}

const creditInfo =
[
  {
    title: "App design",
    info: "Yijun Zhou, Stanford University", 
  },
  {
    title: "Research",
    info: "Jonathan Berger, Professor, Stanford University\nJonathan Abel, Consulting Professor, Stanford University\nTalya Berger, Senior Lecturer, Stanford University\nYasmin Vobis, The Rhode Island School of Design",
  },
  {
    title: "In coordination with the Curator of the Museum of Palazzo Altemps and the curatorial staff", 
    info: "Allesandra Capodiferro, Direttore\nDaniele Fortuna, Assistente Tecnico Storico dell'Art",
  },
  {
    title: "A collaboration between", 
    info: "the Museo Nazionale Romano - Palazzo Altemps\nThe American Academy in Rome\nStanford University ",
  },
];


const styles = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#111',
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
});

module.exports = CreditScreen;