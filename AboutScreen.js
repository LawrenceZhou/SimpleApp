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
  ScrollView,
} from 'react-native';
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


//Credit Screen
//Four parts:
//APP Design
//Research
//Collaboration
//Logos
class AboutScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: ({ tintColor, focused }) => (
      <Text style = {styles.tabBarText}>
      About
      </Text>
    ),
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'}
          size={32}
          style={styles.tabBarIcon}
        />
      ),
  title: "About",
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
        The musical world
        </Text>
        <Text style={styles.welcomeSub}>
          of Palazzo Altemps 1600-1620
        </Text>
        <Text style={styles.coordinateSub}>
          In coordination with the Curator of the Museo Nazional Romano, Palazzo Altemps:{"\n"} Allesandra Capodifierro, Direttore 
        </Text>
        <Text style={styles.coordinateSub}>
          
        </Text>
         <ScrollView scrollEnabled = {false}>
        <ListView
          scrollEnabled = {false}
          removeClippedSubviews = {false}
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
          </ScrollView>
      </View>
    );
  }
}

const creditInfo =
[
  {
    title: "Credit",
    info: "Jonathan Abel, Consulting Professor, Stanford University\n" +
          "Stefano Aresi, Conductor, Ensemble Stile Galante\n" + 
          "Jonathan Berger, Professor, Stanford University\n" + 
          "Talya Berger, Senior Lecturer, Stanford University\n" + 
          "Kathleen Christian, Senior Lecturer, The Open University\n" +
          "Yasmin Vobis, The Rhode Island School of Design\n" +
          "Yijun Zhou, Stanford university (App design and implementation)",
  },

  {
    title: "Ackowledgement", 
    info: "Fabio Barry(Stanford University)\n" +
          "Daniele Fortuna(Museo Nazionale Romano)",
  },

  {
    title: "A collaboration between", 
    info: "the Museo Nazionale Romano - Palazzo Altemps\n" +
          "The American Academy in Rome\n" +
          "Stanford University ",
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
    paddingBottom: 5,
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
    paddingTop: 0,
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
    marginBottom: 2,
    color: '#fff',
  },

  coordinateSub: {
    fontSize: 14,
    fontFamily: "Helvetica Neue",
    fontWeight: "300",
    textAlign: 'center',
    marginTop: 2,
    marginLeft: 10,
    marginRight: 10,

    color: '#fff',
  },

  logoContainer1: {
    position: "absolute",
    top: 315, 
    left: 10,
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
   logoContainer2: {
    position: "absolute",
    top: 312, 
    left: 135,
    width: 105,
    height: 105,
    resizeMode: "cover",
  },
  logoContainer3: {
    position: "absolute",
    top: 300, 
    left: 245,
    width: 130,
    height: 130,
    resizeMode: "cover",
  },
});

module.exports = AboutScreen;