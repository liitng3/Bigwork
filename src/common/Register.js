import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Register extends Component {
  constructor(){
    super();
    this.state = {
        username:'',
        pwd:'',
    }
}
userhandle = (text)=>{
    this.setState({username:text})
}
pwdhandle = (text)=>{
    this.setState({pwd:text})
}
register = () => {
  myFetch.post('./register',{
    username:this.state.username,
    pwd:this.state.pwd
  })
  .then(res => {
    AsyncStorage.setItem('user',JSON.stringify(res.data))
      .then(()=> {
        Actions.login();
    })
  })
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
                onPress={this.register}>
                <Text style={{fontSize:25,color:"white"}}>注册</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:10}} onPress={()=>Actions.login()}><Text style={{color:"#804040",fontSize:18}}>已有账号，点击此处直接登录</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}