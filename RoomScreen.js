import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
  View,
  ListView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';
import Video from 'react-native-video';
import Drawer from 'react-native-drawer';
import Swiper from 'react-native-swiper';
import { StackNavigator, TabNavigator } from 'react-navigation';

const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 280;
const STICKY_HEADER_HEIGHT = 50;
const AVATAR_SIZE = 120;


//Room Screen
//List all the songs belonged to the room
class RoomScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.room.name,
    headerTintColor: "#FFF",
    headerStyle : styles.background,
  });
/*
  state = {renderFlag: true};

  renderStickyHeader() {
  	 const { params } = this.props.navigation.state;
    return(
      <View style={ styles.stickySection }>
        <Text style={ styles.roomName}>{ params.room.name }</Text>
      </View>
    );
  }

  renderForeground() {
  	const { params } = this.props.navigation.state;
    return(
      <View key="parallax-header" style={ styles.parallaxHeader }>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 160}}>
        <View style={{flex: 1, marginLeft: 40}}>
        <TouchableHighlight activeOpacity={ 100 } onPress = {() => this.changeToMusic()} underlayColor="rgba(132, 11, 15, 0)">
        <View style={ [styles.playButton, this.state.renderFlag && styles.playButtonActive] }>
          <Text style={ styles.playButtonText }>
            Music
          </Text>
        </View>
        </TouchableHighlight>
        </View>
        <View style={{flex: 1, marginRight: 30}}>
        <TouchableHighlight activeOpacity={ 100 } onPress = {() => this.changeToAbout()} underlayColor="rgba(132, 11, 15, 0)">
        <View style={ [styles.playButton, !this.state.renderFlag && styles.playButtonActive] }>
          <Text style={ styles.playButtonText }>
            About
          </Text>
        </View>
        </TouchableHighlight>
        </View>
        </View>
      </View>
    );
  }

  renderBackground() {
  	const { params } = this.props.navigation.state;
    return(
      <View key="background" style={ styles.background }>
        <Image source={{uri: params.room.background,
                        width: window.width,
                        height: PARALLAX_HEADER_HEIGHT}}/>
        <View style={ styles.backgroundOverlay }/>
      </View>
    );
  }

  renderSongsList() {
  	const { params } = this.props.navigation.state;
    let songsDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows( params.room.songs );
    return(
      <ListView
        dataSource={ songsDataSource }
        style={ styles.songsList }
        renderRow={(song, sectionId, rowId) => (
          <TouchableHighlight activeOpacity={ 100 } onPress = {() => this.props.navigation.navigate('Music', { songIndex: parseInt( rowId ), songs: params.room.songs, room: params.room })} underlayColor="rgba(132, 11, 15, 0.6)">
            <View key={song} style={ styles.song }>
              <Text style={ styles.songTitle }>
                { song.title }
              </Text>
              <Text style={ styles.albumTitle }>
                { song.album }
              </Text>
            </View>
          </TouchableHighlight>
          )}/>
    );
  }

  renderAboutIntro() {
    const { params } = this.props.navigation.state;
    return(
      <View style={ styles.container }>
      <Text  style={ styles.songTitle }>
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
    );
  }

  renderContent() {
    if(this.state.renderFlag){
      return this.renderSongsList();
    }
    else{
      return this.renderAboutIntro();
    }
  }

  changeToMusic() {
    this.setState({renderFlag: true});
  }
changeToAbout() {
    this.setState({renderFlag: false});
  }*/


  /*render() {
    const { onScroll = () => {} } = this.props;
    return (
      <View>
          <StatusBar
     backgroundColor="blue"
     barStyle="light-content"
   />
        <ParallaxScrollView
          style={ { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, width: window.width, height: window.height } }
          parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
          stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
          onScroll={onScroll}
          renderForeground={ this.renderForeground.bind(this) }
          renderBackground={ this.renderBackground.bind(this) }>
          { this.renderContent() }
        </ParallaxScrollView>
        <View style={ styles.headerClose }>
        </View>
      </View>
    );
  }*/
  constructor(props){
    super(props);
    this.state = {
      playing: true,
      muted: false,
      shuffle: false,
      sliding: false,
      currentTime: 0,
      songIndex: 0,
      quote: true,
      quoteTPE: false,
      quoteFA: false,
    };
    this.render = this.render.bind(this);
    this.renderSong = this.renderSong.bind(this);
    this.playSelected = this.playSelected.bind(this);
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
    if(this.state.songIndex !== 0 ){
      this.setState({
        songIndex: this.state.songIndex - 1,
        currentTime: 0,
      });
    } else {
      this.setState({
        songIndex: this.props.navigation.state.params.room.songs.length - 1,
        currentTime: 0,
      });
    }
  }

  goForward(){
    var length = this.props.navigation.state.params.room.songs.length;
    if(this.state.songIndex == this.props.navigation.state.params.room.songs.length - 1){
      this.setState({
      songIndex: this.state.shuffle ? this.randomSongIndex() : 0,
      currentTime: 0,
    });
    }else{
      this.setState({
      songIndex: this.state.shuffle ? this.randomSongIndex() : this.state.songIndex + 1,
      currentTime: 0,
    });
    }
    
    this.refs.audio.seek(0);
  }

  randomSongIndex(){
    let maxIndex = this.props.navigation.state.params.room.songs.length - 1;
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
    //this.setState({ playing: false });
    this.goForward();
  }


  playSelected = (Id) => {
      this.setState({
      songIndex: this.state.shuffle ? this.randomSongIndex() : Id,
      currentTime: 0,
    });
      this.refs.audio.seek(0);
      console.log(Id);
  }

  renderSong(song, sectionId, rowId) {
    var playing = this.state.songIndex == rowId;
    var toPlay = rowId;

    if(playing){          
            return <TouchableHighlight activeOpacity={ 100 } underlayColor="rgba(132, 11, 15, 0)">
            <View style = {styles.rowContainer}>
            <Icon style={ styles.nowPlayButton } name="ios-volume-up" size={30} color='#840B0F' />
            <View key={song} style={ styles.song }>
              <Text style={ styles.songTitlePlaying }>
                { song.title }
              </Text>
              <Text style={ styles.albumTitlePlaying }>
                { song.album }
              </Text>
            </View>
            </View></TouchableHighlight>

            }else{
            return   <TouchableHighlight activeOpacity={ 100 } onPress={() => {this.playSelected(rowId)}}  underlayColor="rgba(132, 11, 15, 0)">
            <View key={song} style={ styles.song }>
              <Text style={ styles.songTitle }>
                { song.title }
              </Text>
              <Text style={ styles.albumTitle }>
                { song.album }
              </Text>
            </View></TouchableHighlight>
          }
  }

  renderSongsList() {
    const { params } = this.props.navigation.state;
    let songsDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows( params.room.songs );
    return(
      <ListView
        dataSource={ songsDataSource }
        style={ styles.songsList }
        renderRow={this.renderSong.bind(this)}/>
    );
  }

  render = () => {
    const { params } = this.props.navigation.state;
    let songPlaying = params.room.songs[this.state.songIndex];
    let songPercentage;
    if(params.room.name == "Tota pulchra es"){
      this.state.quoteTPE = true;
      this.state.quote = false;
    }else if( params.room.name == "Felice Anerio"){
      this.state.quoteFA = true;
      this.state.quote = false;
    }
    if( this.state.songDuration !== undefined ){
      songPercentage = this.state.currentTime / this.state.songDuration;
    } else {
      songPercentage = 0;
    }

    let playButton;
    if( this.state.playing ){
      playButton = <Icon onPress={ this.togglePlay.bind(this) } style={ styles.play } name="ios-pause" size={60} color="#fff" />;
    } else {
      playButton = <Icon onPress={ this.togglePlay.bind(this) } style={ styles.play } name="ios-play" size={60} color="#fff" />;
    }

    let forwardButton;
      forwardButton = <Icon onPress={ this.goForward.bind(this) } style={ styles.forward } name="ios-skip-forward" size={25} color="#fff" />;
    

    let volumeButton;
      volumeButton = <Icon  onPress = {this.drawerDisplay.bind(this)}  style={ styles.volume } name="ios-list-box" size={25} color="#fff"/>;
      //volumeButton = <TouchableHighlight activeOpacity={ 100 } onPress = {this.drawerDisplay.bind(this)} underlayColor="rgba(132, 11, 15, 0.6)" underlayColor="rgba(132, 11, 15, 0)">
      //<Text style={ styles.volume }>...</Text></TouchableHighlight>;
    
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
        type="overlay"
        side={"right"}
        styles={drawerStyles}
        content={<View style = {styles.drawerBackground}><Text style = {styles.songListTitle}>Song Lists</Text><Icon onPress={ this.closeControlPanel.bind(this) } name="ios-close" size={40} color="#FFF" style = {styles.closeButton}/><View style = {styles.titleBar}></View>{this.renderSongsList()}</View>}
        >
        <StatusBar
     backgroundColor="blue"
     barStyle="light-content"
    />

        <View style={styles.container}>
        <View style={styles.picContainer}>

         <Swiper style={styles.wrapper} 
          showsButtons={true} 
          buttonWrapperStyle  = {styles.bWrapperStyle}
          nextButton = {<Text style={{fontSize:60, color:'#840B0F',
          }}>›</Text>}
          prevButton = {<Text style={{fontSize:60, color:'#840B0F',
          }}>‹</Text>}>

           {params.room.pics.map(function(name, index){
                    return <Image key = {index} 
                    source={{uri: name,
                        width: window.width,
                        height: 240}}/>;
                  })}
          </Swiper>
        </View>

        <View style={styles.introContainer}>
        <ScrollView indicatorStyle =  { 'black'}  >
        {this.state.quote && <View><Text  style={ styles.introText }>{params.room.intro} </Text></View>}
        {this.state.quoteTPE && <View><Text  style={ styles.introText }>{params.room.intro[0]} </Text><Text  style={ styles.quoteText }> Tota pulchra es Maria, et Macula non est in Te</Text><Text style={ styles.introText }>{params.room.intro[1]}</Text></View>}
        {this.state.quoteFA && <View><Text  style={ styles.introText }>{params.room.intro}</Text><Text  style={ styles.quoteText }>..You, who know all things in your divine gaze, as it were, in the mirror of eternity, behold most clearly, know by what sense of spirit, by what mark of devotion I have been ordered by the Illustrious Duke Altemps to compose to your glory, however great that glory is, these songs sought from prophecy. You know with what joy this [task] has been received and accomplished at considerable expense to me. You know that no one of higher or more holy rank than the duke himself has heard any of this musical work, except in the cele­ brated abode in the very sanctuaries of his most spacious palazzo...{"\n"}At Rome, from your chapel in the palazzo of the Duke of Altemp</Text><Text  style={ styles.introText }>(translated by Couchman, 1989)</Text></View>}
       
        
        </ScrollView>

      

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

        <Text style={ styles.albumTitle }>
          { songPlaying.album}
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
          { playButton }
          <Icon onPress={ this.goBackward.bind(this) } style={ styles.back } name="ios-skip-backward" size={25} color="#fff" />
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

  drawerBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: window.height,

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
    height: 240,
    alignItems: 'center',
    backgroundColor: "rgba(241, 241, 241, 1)",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 10,
  },

  playerContainer: {
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.8)",
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
    marginLeft: 10,
    fontSize: 14
  },
  albumTitle: {
    color: "#BBB",
    fontFamily: "Helvetica Neue",
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 4,
  },
  songTitlePlaying: {
    color: '#840B0F',
    fontFamily: "Helvetica Neue",
    marginBottom: 4,
    marginTop: 4,
    fontSize: 14
  },
  albumTitlePlaying: {
    color: '#8F171B',
    fontFamily: "Helvetica Neue",
    fontSize: 12,
    marginBottom: 4,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 0,
  },
  back: {
    marginTop: 7,
    marginRight: 20,
    marginLeft: 20,
  },
  play: {
    marginTop: -10,
    marginLeft: 20,
    marginRight: 40,
  },
  forward: {
    marginTop: 7,
    marginLeft:20,
    marginRight: 20,
  },
  shuffle: {
    marginTop: 7,
  },
  volume: {
    marginTop: 7,
    marginLeft:20,
    marginRight: 20,
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
    color: "black",
    fontFamily: "Helvetica Neue",
    marginBottom: 5,
  },

  quoteText: {
    color: "black",
    fontFamily: "AvenirNext-Italic",
    marginTop: 10,
    marginBottom: 15,
  },

  wrapper: {
    height: 240,

  },

  bWrapperStyle: {
    position: 'absolute', 
    paddingHorizontal: 15,  
    paddingVertical: 30,  
    top: 70, 
    left: 0, 
    opacity: 0.6,
    alignItems:'flex-start'
  },

  songListTitle: {
    paddingTop: 10,
    color: "#FFF",
    fontFamily: "Helvetica Neue",
    textAlign: 'center',
    fontSize: 20,
  },

  closeButton: {
    position: "absolute",
    top: 0,
    right: 10,
  },
  titleBar: {
    marginTop: 5,
    height: 1,
    backgroundColor: "#FFF",
  },

  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  nowPlayButton: {
    marginLeft: 10,
    marginRight: 5,
    marginTop: 6,
  }

});

const drawerStyles = {
  drawerOverlay: { shadowColor: '#000', shadowOpacity: 1, shadowRadius: 3},
  };

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


module.exports = RoomScreen;