import React, { Component } from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class List extends Component {
  render() {
    return (
        <>
        
        <View style={{backgroundColor:'#f4f4f4'}}>
            <View style={{
                backgroundColor:'#ffffff',
                height:100,
                flexDirection:'row',
                justifyContent:'center'
            }}>
                <View style={{backgroundColor:'#f4f4f4',width:"90%",height:50,flexDirection:'row', justifyContent:'center',marginTop:15}}>
                    <TextInput
                        placeholder='请输入商品名称'
                        placeholderTextColor='gray'
                        style={{
                        color:'gray',
                        backgroundColor:'#f4f4f4',
                        fontSize:15,
                        borderColor:'gray',
                        width:"85%",
                        height:50,
                        borderRadius:10,
                    }}
                    />
                    <TouchableOpacity style={{width:50,height:50,borderRadius:20,marginLeft:10,backgroundColor:'#f4f4f4',alignItems:'center',justifyContent:'center'}}>
                        <Icon name="search1" size={28} color="gray"/>
                    </TouchableOpacity>
                </View>
                
            </View>
    
    
            <View style={{flexDirection:'row',backgroundColor:'white'}}>
              <TouchableOpacity style={{width:"20%",height:40,alignItems:'center'}}>
                <Text style={{fontSize:17,color:'#282828'}}>综合</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:"20%",height:40,alignItems:'center'}}>
                <Text style={{fontSize:17,color:'#282828'}}>销量</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:"20%",height:40,alignItems:'center'}}>
                <Text style={{fontSize:17,color:'#282828'}}>新品</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:"20%",height:40,alignItems:'center'}}>
                <Text style={{fontSize:17,color:'#282828'}}>价格</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:"20%",height:40,alignItems:'center'}}>
                <Text style={{fontSize:17,color:'#282828'}}>信用</Text>
              </TouchableOpacity>               
            </View>
            
          
            <View style={{height:685}}>
            <ScrollView style={{flex:1}}>
              <View style={{
                flexDirection:'row',
                justifyContent:'space-evenly',
                flexWrap:'wrap',
              }}>
                <View style={styles.box}>
                  <Image
                      source={require('../../assets/1.gif')}
                      style={styles.img1}
                      resizeMode='stretch'
                  />
                  <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                  <Text style={styles.txt2}>36.00</Text>
                </View>
                <View style={styles.box}>
                        <Image
                            source={require('../../assets/2.gif')}
                            style={styles.img2}
                            resizeMode='stretch'
                        />
                        <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={styles.txt2}>36.00</Text>
                </View>
                <View style={styles.box}>
                  <Image
                      source={require('../../assets/1.gif')}
                      style={styles.img1}
                      resizeMode='stretch'
                  />
                  <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                  <Text style={styles.txt2}>36.00</Text>
                </View>
                <View style={styles.box}>
                        <Image
                            source={require('../../assets/2.gif')}
                            style={styles.img2}
                            resizeMode='stretch'
                        />
                        <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={styles.txt2}>36.00</Text>
                </View>
                <View style={styles.box1}>
                  <Image
                      source={require('../../assets/1.gif')}
                      style={styles.img1}
                      resizeMode='stretch'
                  />
                  <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                  <Text style={styles.txt2}>36.00</Text>
                </View> 
                <View style={styles.box1}>
                  <Image
                      source={require('../../assets/2.gif')}
                      style={styles.img2}
                      resizeMode='stretch'
                  />
                  <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                  <Text style={styles.txt2}>36.00</Text>
                </View>
              </View>
            </ScrollView>
            </View> 
        </View>
        
       </>
    );
  }
}
const styles = StyleSheet.create({
    box: {
      height:300,
      width:"45%",
      marginTop:18,
      backgroundColor:'#ffffff',
      alignItems:'center',
  
    },
    box1: {
      height:340,
      width:"45%",
      marginTop:18,
      backgroundColor:'#ffffff',
      alignItems:'center',
  
    },
    img1:{
      marginTop:45,
      width:105,
      height:140,
    },
    img2:{
      marginTop:45,
      width:125,
      height:140,
    },
    txt1:{
      fontSize:15,
      marginLeft:8,
      marginTop:30,
      color:"gray"
    },
    txt2:{
      fontSize:15,
      marginTop:10,
      marginLeft:-100,
      color:"red"
    },
  
  });

  
  
  
  
  
  
