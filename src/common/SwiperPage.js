import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, AsyncStorage, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwiperPage extends Component {
  start =  () => {
        AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        });
  };
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Image
            style={styles.img}
            source={require('../../assets/slider1.jpg')}
          />
          <View style={styles.start1}>
             <Text style={{fontSize:25}}>❤欢迎光临❤</Text>
          </View>
        </View> 
        <View style={styles.slide1}>
          <Image
            style={styles.img}
            source={require('../../assets/slider2.jpg')}
          />
          <View style={styles.start1}>
             <Text style={{fontSize:25}}>❤李婷的大作业❤</Text>
          </View>
        </View>
        <View style={styles.slide1} >
          <Image
            style={styles.img}
            source={require('../../assets/slider3.jpg')}
          />
          <TouchableOpacity style={styles.start}  onPress={this.start}>
            <Text style={{fontSize:25}}>开始体验</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
  slide1: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  start: {
    position: 'absolute',
    bottom: 100,
    width: 220,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  start1: {
    position: 'absolute',
    bottom: 100,
    width: 220,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white",
    opacity:0.6,
    borderRadius: 20,
  },
});