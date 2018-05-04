import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
TouchableHighlight,
Image,
Dimensions,
  Navigator,
  View,
  Button,
  StatusBar,
  ScrollView,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import { CircularProgress, AnimatedCircularProgress } from 'react-native-circular-progress';
import Sound from 'react-native-sound';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import { WebView } from 'react-native';



//Record Screen

const window = Dimensions.get('window');
const bottomBarHeight = 40;
class RecordScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: ({ tintColor, focused }) => (
      <Text style = {styles.tabBarText}>
      Hear
      </Text>
    ),
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-microphone' : 'ios-microphone-outline'}
          size={32}
          style={styles.tabBarIcon}
        />
      ),
  title: "Hear your song",
  };


  constructor(props){
    super(props);
    this.state = {
      currentTime: 0.0,
      recording: false,
      stoppedRecording: false,
      sent: false,
      received: false,
      hasPermission: true,
      fill: 0,
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
    };
    this.render = this.render.bind(this);
  }

 prepareRecordingPath(audioPath){
      AudioRecorder.prepareRecordingAtPath(audioPath, {
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: "Low",
        AudioEncoding: "aac",
        AudioEncodingBitRate: 32000
      });
    }

   componentDidMount() {
      this.checkPermission().then((hasPermission) => {
        this.setState({ hasPermission });

        if (!hasPermission) return;

        this.prepareRecordingPath(this.state.audioPath);

        AudioRecorder.onProgress = (data) => {
          this.setState({currentTime: Math.floor(data.currentTime)});
          this.setState({fill: this.state.currentTime / 60.0 * 100});
        };

        AudioRecorder.onFinished = (data) => {
          // Android callback comes in the form of a promise instead.
          if (Platform.OS === 'ios') {
            this.finishRecording(data.status === "OK", data.audioFileURL);
          }
        };
      });
    }

    checkPermission() {
      if (Platform.OS !== 'android') {
        return Promise.resolve(true);
      }

      const rationale = {
        'title': 'Microphone Permission',
        'message': 'AudioExample needs access to your microphone so you can record audio.'
      };

      return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
        .then((result) => {
          console.log('Permission result:', result);
          return (result === true || result === PermissionsAndroid.RESULTS.GRANTED);
        });
    }


    finishRecording(didSucceed, filePath) {
      this.setState({ finished: didSucceed });
      console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath}`);
    }


  async toggleRecordOn(){
        AudioRecorder.prepareRecordingAtPath(this.state.audioPath, {
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: "Low",
        AudioEncoding: "aac",
        AudioEncodingBitRate: 32000
      });

    if (this.state.recording) {
        console.warn('Already recording!');
        return;
      }

     

      if(this.state.stoppedRecording){
        this.prepareRecordingPath(this.state.audioPath);
      }

      this.setState({recording: true});

      try {
        const filePath = await AudioRecorder.startRecording();
      } catch (error) {
        console.error(error);
      }
  }

  async toggleRecordOff(){
     if (!this.state.recording) {
        console.warn('Can\'t stop, not recording!');
        return;
      }

      this.setState({stoppedRecording: true, recording: false});

      try {
        const filePath = await AudioRecorder.stopRecording();

        if (Platform.OS === 'android') {

        this.setState({ finished: true });
      	console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath}`);

        }
        this.play();
        return filePath;
      } catch (error) {
        console.error(error);
      }
  }


   async play() {
      if (this.state.recording) {
        await this.toggleRecordOff();
      }

      // These timeouts are a hacky workaround for some issues with react-native-sound.
      // See https://github.com/zmxv/react-native-sound/issues/89.
      setTimeout(() => {
        var sound = new Sound(this.state.audioPath, '', (error) => {
          if (error) {
            console.warn('failed to load the sound', error);
          }
        });

        setTimeout(() => {
          sound.play((success) => {
            if (success) {
              console.warn('successfully finished playing');
            } else {
              console.warn('playback failed due to audio decoding errors');
            }
          });
        }, 100);
      }, 100);
    }


  render() {
  	 let recordButton;
    if( !this.state.recording ){
      recordButton = <TouchableHighlight style={ styles.recordButton }><Text onPress={this.toggleRecordOn.bind(this) }  style={ styles.recordButtonText }>Start Recording</Text></TouchableHighlight>;
    } else {
      recordButton = <TouchableHighlight style={ styles.recordButton }><Text onPress={this.toggleRecordOff.bind(this) }  style={ styles.recordButtonText }>Stop and Hear</Text></TouchableHighlight>;
    }

     let recordLogo;
     recordLogo = <View><View style = {styles.recordLogo}></View><AnimatedCircularProgress
  size={110}
  width={5}
  fill={this.state.fill}
  tintColor="#ffffff"
  rotation={0}
  style= {styles.recordProgress}
  friction={100}
  onAnimationComplete={() => console.log('onAnimationComplete')}
    backgroundColor="#222222"
   /><Icon onPress={this.toggleRecordOn.bind(this) } style={ styles.record } name="ios-mic" size={48} color="#fff" /></View>;


    return (
      <View style={styles.listContainer}>

       <WebView
        source={{uri: 'https://ccrma.stanford.edu/~yjz/dsp/dsp.html'}}
        style={{marginTop: 20, height: 100}}
      />

      <View style={styles.picContainer1}>
      <Image style={styles.ImageContainer1}
      resizeMode='cover'
      source={{uri: "https://s3-us-west-2.amazonaws.com/museumpalazzo/ChurchEntrance.jpg",
                        }}>
                        <View style={styles.container}>
        <Text style={styles.TextContainer}>
        from Narthex
        </Text>
        </View>
       </Image>

       </View>

       <View style={styles.picContainer2}>
       <Image style={styles.ImageContainer2}
       resizeMode='cover'
      source={{uri: "https://s3-us-west-2.amazonaws.com/museumpalazzo/volta-chiesa-del-gesu-bacic_med_hr.jpeg", 
                        }}>
                         <View style={styles.container}>
         <Text style={styles.TextContainer}>
          from Dome
        </Text>
         </View>
       </Image>
       </View>
              <View style={styles.RecordContainer}>
        {recordLogo}
        {recordButton}
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  tabBarText: {
    fontSize: 10,
    textAlign: 'center',
    paddingBottom: 4,
    color: '#840B0F',
  },

  tabBarIcon: {
  	textAlign: 'center',
     width: 32,
     height:54,
    color: '#840B0F',
  },

  container: {
  	 flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',

    justifyContent: 'center',
    alignItems: "center"

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

  record: {
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
    width: window.width,
    position: 'absolute',
  	top: -window.height/2 + 24 - 50,
  },

  picContainer1: {
  	flex: 4,
  },

  picContainer2: {
  	flex: 4,
  },

  ImageContainer1: {
      width: window.width,
      flex: 1,
  },

   ImageContainer2: {
      width: window.width,
      flex: 1,

  },
  TextContainer: {

  	color: "#FFF",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "500",
    fontSize: 24,
	  textAlign: 'center',
  },
  RecordContainer: {
    backgroundColor: 'transparent',
    width: window.width,

  },
  recordLogo: {
  	position: 'absolute',
  	top: -window.height/2 - 50 ,
  	left: window.width/2 - 50,
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#840B0F',
  },

  recordButton: {
    height: 50,
    width: 150,
    position: 'absolute',
    top: -window.height/2 + 80,
    left: window.width/2 - 75,
    backgroundColor: 'transparent',
    paddingTop:10,
    paddingBottom:10,
    borderRadius:50,
    borderWidth: 5,
    borderColor: '#840B0F',
  },

   recordButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Helvetica Neue",
    textAlign: 'center',
    fontWeight: "500",
   },

  recordProgress: {
position: 'absolute',
  	top: -window.height/2- 55 ,
  	left: window.width/2 - 55,
  },
});

module.exports = RecordScreen;