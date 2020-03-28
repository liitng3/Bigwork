import React, {Component} from 'react';
import {BackHandler,View, Text, Image, TextInput, AsyncStorage, TouchableOpacity,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd
          }
        )
        .then(res=>{
          console.log(res.data)
          AsyncStorage.setItem('user',JSON.stringify(res.data))
              .then(()=>{
                  this.setState({isloading:false})
                  Actions.lightbox();
              })
          })
    } 
  render() {
    let now = 0;
      BackHandler.addEventListener('hardwareBackPress', () => {
        let time = Date.now()
        if (time - now <= 2000) {
            BackHandler.exitApp()
        } else {
            ToastAndroid.show('确定要退出吗',100);
            now = new Date().getTime();
            return true;
        }
    })
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              marginBottom:30,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" size={30} color="#900" />
            <TextInput placeholder="用户名" style={{fontSize:25}}
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              marginBottom:30,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="lock" size={30} color="#900" />
            <TextInput 
                style={{fontSize:25}}
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
          <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 70,
                    backgroundColor: '#272727',
                    borderRadius:20,
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.login}>
                <Text style={{fontSize:25,color:"white"}}>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:10}} onPress={()=>Actions.register()}><Text style={{color:"#804040",fontSize:18}}>还没有账号，请先点击此处进行注册</Text></TouchableOpacity>
        </View>
        {
            this.state.isloading
            ? <View style={{alignItems: 'center',justifyContent: 'center',borderRadius:25,marginLeft:"25%",position:"absolute",bottom:70,width:"50%",height:60,backgroundColor:"#984B4B"}}><Text style={{color:"white",fontSize:30,alignItems:"center"}}>正在登录中</Text></View>
            :null
        }
      </View>
    );
  }
}