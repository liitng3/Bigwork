import React, { Component } from 'react';
const {width,height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import {View, Text, Image,Dimensions, TextInput, StatusBar,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
export default class Home extends Component {
  render() {
    return (
        <>
        <ScrollView>
            <View style={{
                backgroundColor:'#f23030',
                height:55,
                flexDirection:'row',
                justifyContent:'center'
            }}>
                <View style={{backgroundColor:'#fbb8b8',width:"80%",height:40,flexDirection:'row', justifyContent:'center',marginTop:8,borderRadius:40,}}>
                    <Icon name="search" size={25} color="white" style={{marginTop:5}}/>
                    <TextInput
                        placeholder='请输入商品名称'
                        placeholderTextColor='white'
                        style={{
                        color:'white',
                        fontSize:20,
                        width:"85%",
                        height:45,
                        borderRadius:40,
                       
                    }}
                    />
                    
                </View>
                <TouchableOpacity style={{marginTop:3,width:50,height:50,borderRadius:20,marginLeft:10,backgroundColor:'#f23030',alignItems:'center',justifyContent:'center'}}>
                    <Icon name="shopping-cart" size={30} color="white" />
                </TouchableOpacity>
            </View>



            
            <Swiper showsButtons={false} 
                autoplay={true} 
                style={{height:220}}
                activeDot={<View style={{   
                    backgroundColor: '#fd0304',
                    width: 15,
                    height: 15,
                    borderRadius: 7.5,
                    marginLeft: 10,
                    marginRight: 9,
                    marginTop: 30,
                }}/>}
                dot={<View style={{           //未选中的圆点样式
                    backgroundColor: 'white',
                    width: 15,
                    height: 15,
                    borderRadius: 7.5,
                    marginLeft: 10,
                    marginRight: 9,
                    marginTop: 30,
                }}/>}
            >
                <View style={styles.slide}>
                    <Image style={{width:width,height:220}} resizeMode='stretch' source={require('../../assets/5.png')}></Image>
                </View>
                <View style={styles.slide}>
                    <Image style={{width:width,height:220}} resizeMode='stretch' source={require('../../assets/6.png')}></Image>
                </View>
                <View style={styles.slide}>
                    <Image style={{width:width,height:220}} resizeMode='stretch' source={require('../../assets/5.png')}></Image>
                </View>
            </Swiper>

           
            <TouchableOpacity>
            <View style={{flexDirection:'row',backgroundColor:'white',width:width,height:80,alignItems:'center',marginTop:5}}>
                <View style={{width:70,height:70,borderRadius:50,backgroundColor:"#ffcccc",marginLeft:20}}>
                    <Image style={{width:70,height:70}} resizeMode='center' source={require('../../assets/13.png')}/>
                </View>
                <Text style={{color:"#5d5d5d",fontSize:18,marginLeft:20}}>居家维护修养</Text>
                <TouchableOpacity style={{marginLeft:220}}>
                    <Icon name="right" color='#c1bdbd'/>
                </TouchableOpacity>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row',backgroundColor:'white',width:width,height:80,alignItems:'center',marginTop:5}}>
                <View style={{width:70,height:70,borderRadius:50,backgroundColor:"#ffe1b1",marginLeft:20}}>
                    <Image style={{width:70,height:70}} resizeMode='center' source={require('../../assets/12.png')}/>
                </View>
                <Text style={{color:"#5d5d5d",fontSize:18,marginLeft:20}}>住宿优惠</Text>
                <TouchableOpacity style={{marginLeft:260}}>
                    <Icon name="right" color='#c1bdbd'/>
                </TouchableOpacity>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row',backgroundColor:'white',width:width,height:80,alignItems:'center',marginTop:5}}>
                <View style={{width:70,height:70,borderRadius:50,backgroundColor:"#bfe6a8",marginLeft:20}}>
                    <Image style={{width:70,height:70}} resizeMode='center' source={require('../../assets/11.png')}/>
                </View>
                <Text style={{color:"#5d5d5d",fontSize:18,marginLeft:20}}>出行接送</Text>
                <TouchableOpacity style={{marginLeft:260}}>
                    <Icon name="right" color='#c1bdbd'/>
                </TouchableOpacity>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row',backgroundColor:'white',width:width,height:80,alignItems:'center',marginTop:5}}>
                <View style={{width:70,height:70,borderRadius:50,backgroundColor:"#c3ddf2",marginLeft:20}}>
                    <Image style={{width:70,height:70}} resizeMode='center' source={require('../../assets/10.png')}/>
                </View>
                <Text style={{color:"#f23636",fontSize:18,marginLeft:20}}>E族活动</Text>
                <TouchableOpacity style={{marginLeft:265}}>
                    <Icon name="right" color='#c1bdbd'/>
                </TouchableOpacity>
            </View>
            </TouchableOpacity>


            <View style={{width:width,justifyContent:"center",alignItems:"center",marginTop:30}}>
                <TouchableOpacity style={{width:"80%",height:50,backgroundColor:"#f23636",justifyContent:"center",alignItems:"center",borderRadius:10}}>
                    <Text style={{color:'white',fontSize:18}}>发布需求</Text>
                </TouchableOpacity>
            </View>


            <View style={{width:width,justifyContent:"center",alignItems:"center",marginTop:30,marginBottom:30}}>
                <Text style={{color:'#666666',fontSize:13}}>©E族之家 版权所有</Text>
            </View>
        </ScrollView>
        </>
    );
  }
}
const styles = StyleSheet.create({
    slide:{
        width:width,
        height:220,
        justifyContent:'center',
        alignItems:'center'
    },
    
});






            