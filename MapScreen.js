import React from 'react';
import { StyleSheet, Text, Image, View, Navigator, ScrollView, TouchableOpacity, TouchableHighlight, StatusBar} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from './i18n.js';
import { Rooms } from './songData';

//Map Screen(Floor Plan)
//A touchable map to get into the rooms as an alternative way of List.
class MapScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: ({ tintColor, focused }) => (
      <Text style = {styles.tabBarText}>Map</Text>
    ),
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-map' : 'ios-map-outline'}
          size={32}
          style={styles.tabBarIcon}
        />
      ),
    title: I18n.t("title"),

  });
    render() {
   //  var audioCtx = (window.AudioContext || window.webkitAudioContext);
   //  ajaxRequest = new XMLHttpRequest();
   //  ajaxRequest.open('GET', 'applePen.wav', true);
   //  ajaxRequest.responseType = 'arraybuffer';

   //  ajaxRequest.onload = function() {
   //  var audioData = ajaxRequest.response;
   //  audioCtx.decodeAudioData(audioData, function(buffer) {
   //  if (navigator.mediaDevices) {
   //    navigator.mediaDevices.getUserMedia ({audio: true})
   //    .then(function(stream) {
   //      var source = audioCtx.createMediaStreamSource(stream);
   //      var gain = audioCtx.createGain();
   //    //gain.gain.value = 0.5; // static for now...
   //     var convolver = audioCtx.createConvolver();
   //    convolver.buffer = buffer;
   //    source.connect(gain);
   //    gain.connect(convolver);
   //    convolver.connect(audioCtx.destination);
   //  }).catch(function(err) {
   //    console.log('The following gUM error occured: ' + err);
   //  });
   //  } else {
   //  console.log('getUserMedia not supported on your browser!');
   //   }
   //  }, function(e){"Error with decoding audio data" + e.err});
   //}

   //  ajaxRequest.send();

    return( 

    <View style={styles.outContainer}>
    <StatusBar
     backgroundColor="blue"
     barStyle="dark-content"
   />
          <View style={styles.welcomeContainer}>
            <TouchableHighlight activeOpacity={ 100 }>
            <Image
              source={require('./assets/images/chapel_axon.png')}
              style = {styles.mapContainer}/>
          </TouchableHighlight>
          </View>
          
          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(132, 11, 15, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[0] })}>
            <View style={ [styles.numberButton, {top: -10, left: 330}] }>
              <Text style={ styles.numberButtonText }>
                1
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(132, 11, 15, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[1] })}>
            <View style={ [styles.numberButton, {top: 70, left: 320}] }>
              <Text style={ styles.numberButtonText }>
                2
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(132, 11, 15, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[2] })}>
            <View style={ [styles.numberButton, {top: 120, left: 80}] }>
              <Text style={ styles.numberButtonText }>
                3
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(132, 11, 15, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[3] })}>
            <View style={ [styles.numberButton, {top: -30, left: 300}] }>
              <Text style={ styles.numberButtonText }>
                4
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(132, 11, 15, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[4] })}>
            <View style={ [styles.numberButton, {top: 80, left: 275}] }>
              <Text style={ styles.numberButtonText }>
                5
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(132, 11, 15, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[5] })}>
            <View style={ [styles.numberButton, {top: 110, left: 155}] }>
              <Text style={ styles.numberButtonText }>
                6
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(132, 11, 15, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[6] })}>
            <View style={ [styles.numberButton, {top: 20, left: 250}] }>
              <Text style={ styles.numberButtonText }>
                7
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(132, 11, 15, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[7] })}>
            <View style={ [styles.numberButton, {top: 170, left: 240}] }>
              <Text style={ styles.numberButtonText }>
                8
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(132, 11, 15, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[8] })}>
            <View style={ [styles.numberButton, {top: 170, left: 320}] }>
              <Text style={ styles.numberButtonText }>
                9
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(132, 11, 15, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[9] })}>
            <View style={ [styles.numberButton, {top: 60, left: 120}] }>
              <Text style={ styles.numberButtonText }>
                10
              </Text>
            </View>
          </TouchableHighlight>

           <Text style={ styles.churchText }>
                {I18n.t("floating")}:
          </Text>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(255, 255, 255, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[0] })}>
            <View style={ [styles.textButton, {top: 220}] }>
            <Text style={ styles.textButtonText }>
                1. {I18n.t("room1")}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(255, 255, 255, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[1] })}>
            <View style={ [styles.textButton, {top: 245}] }>
              <Text style={ styles.textButtonText }>
                2. {I18n.t("room2")}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(255, 255, 255, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[2] })}>
            <View style={ [styles.textButton, {top: 270}] }>
              <Text style={ styles.textButtonText }>
                3. {I18n.t("room3")}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(255, 255, 255, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[3] })}>
            <View style={ [styles.textButton, {top: 295}] }>
              <Text style={ styles.textButtonText }>
                4. {I18n.t("room4")}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(255, 255, 255, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[4] })}>
            <View style={ [styles.textButton, {top: 320}] }>
              <Text style={ styles.textButtonText }>
                5. {I18n.t("room5")}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(255, 255, 255, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[5] })}>
            <View style={ [styles.textButton, {top: 345}] }>
              <Text style={ styles.textButtonText }>
                6. {I18n.t("room6")}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(255, 255, 255, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[6] })}>
            <View style={ [styles.textButton, {top: 370}] }>
              <Text style={ styles.textButtonText }>
                7. {I18n.t("room7")}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(255, 255, 255, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[7] })}>
            <View style={ [styles.textButton, {top: 395}] }>
              <Text style={ styles.textButtonText }>
                8. {I18n.t("room8")}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(255, 255, 255, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[8] })}>
            <View style={ [styles.textButton, {top: 420}] }>
              <Text style={ styles.textButtonText }>
                9. {I18n.t("room9")}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(255, 255, 255, 0)" onPress = {() => this.props.navigation.navigate('Room', { room: Rooms[9] })}>
            <View style={ [styles.textButton, {top: 445}] }>
              <Text style={ styles.textButtonText }>
                10. {I18n.t("room10")}
              </Text>
            </View>
          </TouchableHighlight>
      </View>
    )
  }

  handlePress(evt){
    /*if(evt.nativeEvent.locationX > 100 && evt.nativeEvent.locationX < 230 &&
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
    }*/

  }
}
module.exports = MapScreen;


const styles = StyleSheet.create({
  outContainer: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#111',
  },

  backgroundTitle: {
    color:"#FFF",
  },

  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  detailText: {
    position: 'absolute',
    fontSize: 16,
    left: 10,
    color: '#fff',
  },

  churchText: {
    position: 'absolute',
    fontSize: 14,
    left: 230,
    top: 190,
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
    textAlign: 'center',
     width: 32,
     height:54,
  },

  directIcon: {
    color: '#FFF',
  },

  mapContainer: {
    position: 'absolute',
    flex: 1,
    width: 360,
    height: 480,
    top: -130,
    left: -180,
    resizeMode: "contain",
  },

  numberButton: {
    position: 'absolute',
    backgroundColor: "rgba(132, 11, 15, 0.6)",
    borderRadius: 10,
    borderWidth: 6,
    borderColor: "rgba(132, 11, 15, 0)",
    width: 28,
    height: 28,
  },

  numberButtonText: {
    color: "#FFF",
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    textAlign: 'center',
  },

  textButton: {
    position: 'absolute',
    backgroundColor: "rgba(132, 11, 15, 0)",
    alignSelf: 'flex-start',
    height: 20,
    left: 10,
  },

  textButtonText: {
    color: "#FFF",
    fontFamily: "Helvetica Neue",
    fontSize: 16,
    textAlign: 'left',
  },
});



