import {
  AppRegistry,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';
import Video from 'react-native-video';
import Drawer from 'react-native-drawer';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Sound from 'react-native-sound';


const window = Dimensions.get('window');


//Music Play Screen
//
class MusicScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
    //title: navigation.state.params.room.name,
    headerTintColor: "#FFF",
    headerStyle : styles.background,
  });

  constructor(props){
    super(props);
    this.state = {
      playing: true,
      muted: false,
      shuffle: false,
      sliding: false,
      currentTime: 0,
      songIndex: this.props.navigation.state.params.songIndex,
    };
    this.render = this.render.bind(this);
  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  togglePlay(){
    this.setState({ playing: !this.state.playing });
  }

  drawerDisplay(){
this.openControlPanel();
  }


  toggleVolume(){
    this.setState({ muted: !this.state.muted });
  }

  toggleShuffle(){
    this.setState({ shuffle: !this.state.shuffle });
  }

  goBackward(){
    if(this.state.currentTime < 3 && this.state.songIndex !== 0 ){
      this.setState({
        songIndex: this.state.songIndex - 1,
        currentTime: 0,
      });
    } else {
      this.refs.audio.seek(0);
      this.setState({
        currentTime: 0,
      });
    }
  }

  goForward(){
    this.setState({
      songIndex: this.state.shuffle ? this.randomSongIndex() : this.state.songIndex + 1,
      currentTime: 0,
    });
    this.refs.audio.seek(0);
  }

  randomSongIndex(){
    let maxIndex = this.props.navigation.state.params.songs.length - 1;
    var randomIndex = Math.floor(Math.random() * (maxIndex - 0 + 1)) + 0;
    console.log(randomIndex);
    return randomIndex;
  }

  setTime(params){
    if( !this.state.sliding ){
      this.setState({ currentTime: params.currentTime });
    }
  }

  onLoad(params){
    this.setState({ songDuration: params.duration });
  }

  onSlidingStart(){
    this.setState({ sliding: true });
  }

  onSlidingChange(value){
    let newPosition = value * this.state.songDuration;
    this.setState({ currentTime: newPosition });
  }

  onSlidingComplete(){
    this.refs.audio.seek( this.state.currentTime );
    this.setState({ sliding: false });
  }

  onEnd(){
    this.setState({ playing: false });
  }


  render = () => {
    const { params } = this.props.navigation.state;
    let songPlaying = params.songs[this.state.songIndex];
    let songPercentage;
    if( this.state.songDuration !== undefined ){
      songPercentage = this.state.currentTime / this.state.songDuration;
    } else {
      songPercentage = 0;
    }

    let playButton;
    if( this.state.playing ){
      playButton = <Icon onPress={ this.togglePlay.bind(this) } style={ styles.play } name="ios-pause" size={30} color="#fff" />;
    } else {
      playButton = <Icon onPress={ this.togglePlay.bind(this) } style={ styles.play } name="ios-play" size={30} color="#fff" />;
    }

    let forwardButton;
    if( !this.state.shuffle && this.state.songIndex + 1 === params.songs.length ){
      forwardButton = <Icon style={ styles.forward } name="ios-skip-forward" size={25} color="#333" />;
    } else {
      forwardButton = <Icon onPress={ this.goForward.bind(this) } style={ styles.forward } name="ios-skip-forward" size={25} color="#fff" />;
    }

    let volumeButton;
      //volumeButton = <TouchableHighlight activeOpacity={ 100 } onPress = {() => this.props.navigation.navigate('MusicInfo', { room: params.room })} underlayColor="rgba(132, 11, 15, 0.6)" underlayColor="rgba(132, 11, 15, 0)">
      volumeButton = <TouchableHighlight activeOpacity={ 100 } onPress = {this.drawerDisplay.bind(this)} underlayColor="rgba(132, 11, 15, 0.6)" underlayColor="rgba(132, 11, 15, 0)">
      <Text style={ styles.volume }>...</Text></TouchableHighlight>;
    
    let shuffleButton;
    if( this.state.shuffle ){
      shuffleButton = <Icon onPress={ this.toggleShuffle.bind(this) } style={ styles.shuffle } name="ios-shuffle-outline" size={25} color="#840B0F" />;
    } else {
      shuffleButton = <Icon onPress={ this.toggleShuffle.bind(this) } style={ styles.shuffle } name="ios-shuffle-outline" size={25} color="#fff" />;
    }

    let image = params.room.background;
    return (
       <Drawer
        ref={(ref) => this._drawer = ref}
        side={"right"}
        content={<View><Text>123</Text><Icon onPress={ this.closeControlPanel.bind(this) } name="ios-close" size={25} color="#000" /></View>}
        >

        <View style={styles.container}>
        <View style={styles.picContainer}>
          <Image source={{uri: image,
                        width: window.width,
                        height: 240}}/>
        </View>

        <View style={styles.introContainer}>
      <Text  style={ styles.introText }>
      {params.room.introShort}
      </Text>
      <View style={{flex: 1, marginRight: 240}}>
     <TouchableHighlight activeOpacity={ 100 } onPress = {() => this.props.navigation.navigate('RoomAbout', { room: params.room })} underlayColor="rgba(132, 11, 15, 0.6)" underlayColor="rgba(132, 11, 15, 0)">
        <View style={ styles.playButton}>
          <Text style={ styles.readMore }>
            Read More
          </Text>
        </View>
        </TouchableHighlight>
        </View>
        </View>

      <View style={styles.playerContainer}>

        <Video source={{uri: songPlaying.url }}
            ref="audio"
            volume={ this.state.muted ? 0 : 1.0}
            muted={false}
            paused={!this.state.playing}
            onLoad={ this.onLoad.bind(this) }
            onProgress={ this.setTime.bind(this) }
            onEnd={ this.onEnd.bind(this) }
            playInBackground={true}
            resizeMode="cover"
            repeat={false}/>

       
        <Text style={ styles.songTitle }>
          { songPlaying.title }
        </Text>
        <View style={ styles.sliderContainer }>
          <Slider
            onSlidingStart={ this.onSlidingStart.bind(this) }
            onSlidingComplete={ this.onSlidingComplete.bind(this) }
            onValueChange={ this.onSlidingChange.bind(this) }
            minimumTrackTintColor='#851c44'
            style={ styles.slider }
            trackStyle={ styles.sliderTrack }
            thumbStyle={ styles.sliderThumb }
            value={ songPercentage }/>

          <View style={ styles.timeInfo }>
            <Text style={ styles.time }>{ formattedTime(this.state.currentTime)  }</Text>
            <Text style={ styles.timeRight }>- { formattedTime( this.state.songDuration - this.state.currentTime ) }</Text>
          </View>
        </View>
        <View style={ styles.controls }>
          { shuffleButton }
          <Icon onPress={ this.goBackward.bind(this) } style={ styles.back } name="ios-skip-backward" size={25} color="#fff" />
          { playButton }
          { forwardButton }
          { volumeButton }
        </View>
      </View>
    </View>
      </Drawer>

    );
  }
}

const styles = StyleSheet.create({
    background: {
    backgroundColor: "#000",

  },

  container: {
    flex: 1,
    backgroundColor: "black",
  },

  picContainer: {
    height: 240,
    alignItems: 'center',
  },

  introContainer: {
    height: 260,
    alignItems: 'center',
    backgroundColor: "black",
    paddingTop: 10,
    paddingLeft: 20,
  },

  playerContainer: {
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: "rgba(132, 11, 15, 0.8)",
  },
  header: {
    marginTop: 17,
    marginBottom: 17,
    width: window.width,
  },
  headerClose: {
    position: 'absolute',
    top: 10,
    left: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: 'center',
  },
  songImage: {
    marginBottom: 20,
  },
  songTitle: {
    color: "white",
    fontFamily: "Helvetica Neue",
    marginBottom: 4,
    marginTop: 4,
    fontSize: 14
  },
  albumTitle: {
    color: "#BBB",
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 0,
  },
  back: {
    marginTop: 7,
    marginLeft: 45,
  },
  play: {
    marginTop: 5,
    marginLeft: 50,
    marginRight: 50,
  },
  forward: {
    marginTop: 7,
    marginRight: 45,
  },
  shuffle: {
    marginTop: 7,
  },
  volume: {
    fontSize: 30,
    marginTop: 0,
    color: "white",
  },
  sliderContainer: {
    width: window.width - 40,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  time: {
    color: '#FFF',
    flex: 1,
    fontSize: 10,
  },
  timeRight: {
    color: '#FFF',
    textAlign: 'right',
    flex: 1,
    fontSize: 10,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    backgroundColor: '#840B0F',
    borderRadius: 10 / 2,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  },

   playButton: {
    marginBottom: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgba(255,255,255,0)',
    borderRadius: 200,
    borderWidth: 5,
    borderColor: "#840B0F",
    width: 140,
  },

  readMore: {
    color: "#840B0F",
    fontFamily: "Helvetica Neue",
    textAlign: 'center',
  },

  introText: {
    color: "white",
    fontFamily: "Helvetica Neue",
    marginBottom: 5,
  },
});

function withLeadingZero(amount){
  if (amount < 10 ){
    return `0${ amount }`;
  } else {
    return `${ amount }`;
  }
}

function formattedTime( timeInSeconds ){
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds - minutes * 60;

  if( isNaN(minutes) || isNaN(seconds) ){
    return "";
  } else {
    return(`${ withLeadingZero( minutes ) }:${ withLeadingZero( seconds.toFixed(0) ) }`);
  }
}


module.exports = MusicScreen;
