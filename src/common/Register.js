import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Register extends Component {
  constructor(){
    super();
    this.state = {
        username:'',
        pwd:'',
        phone:'',
        isload:false
    }
}
userhandle = (text)=>{
    this.setState({username:text})
}
pwdhandle = (text)=>{
    this.setState({pwd:text})
}
phonehandle = (text)=>{
  this.setState({phone:text})
}
register = () => {
  if(this.state.username!="" && this.state.pwd!="" && this.state.phone!=""){
    this.setState({isload:true})
    myFetch.post('./register',{
      username:this.state.username,
      pwd:this.state.pwd,
      phone:this.state.phone
    })
    .then(res => {
      if(res.data.token=='1'){
        this.setState({isload:false})
        Alert.alert("该用户已注册")
      }
      else{
        AsyncStorage.setItem('user',JSON.stringify(res.data))
        .then(()=> {
          this.setState({isload:false})
          Actions.login();
        })
      }
    })
  }
  else{
    Alert.alert("输入项不可为空")
  }
  
}
  render() {
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
            <TextInput placeholder="用户名" style={{fontSize:25,width: '100%'}}
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
                style={{fontSize:25,width: '100%'}}
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
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
            <Icon name="phone" size={30} color="#900" />
            <TextInput 
                style={{fontSize:25,width: '100%'}}
                onChangeText={this.phonehandle}
                placeholder="手机号" 
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
                onPress={this.register}>
                <Text style={{fontSize:25,color:"white"}}>注册</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:10}} onPress={()=>Actions.login()}><Text style={{color:"#804040",fontSize:18}}>已有账号，点击此处直接登录</Text></TouchableOpacity>
        </View>
        {
            this.state.isload
            ? <View style={{alignItems: 'center',justifyContent: 'center',borderRadius:25,marginLeft:"25%",position:"absolute",bottom:70,width:"50%",height:60,backgroundColor:"#984B4B"}}><Text style={{color:"white",fontSize:30,alignItems:"center"}}>正在注册</Text></View>
            :null
        }
      </View>
    );
  }
}