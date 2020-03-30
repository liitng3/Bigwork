import React, { Component } from 'react';
const {width,height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, Image,Dimensions, AsyncStorage,ScrollView,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
const options = {
    title:'选择图片',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'相册',
    allowsEditing:true,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
export default class My extends Component {
    constructor(){
        super();
        this.state = {
            source:require('../../assets/122.png')
        }
    }
    componentDidMount(){
        var that=this
        AsyncStorage.getItem("fileName", function (error, result) {
            if (error) {
            }else {
                that.setState({
                    source: JSON.parse(result),
                });
            }
        })
    }
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                var source = { uri: response.uri };
                this.setState({
                    source: source,
                });
                source = JSON.stringify(source);
                AsyncStorage.setItem("fileName",source,
                    ()=>{console.log('store success')}
                )
            }
          });
    }
    quit=()=>{
        AsyncStorage.removeItem('user',(error)=>{
            if (error) {
            }else {
                console.log("退出登录")
                Actions.login();
            }
        })
    }
  render() {
    return (
      <>
      <ScrollView>
        <View style={{width:width,height:200,backgroundColor:'#f23030',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{this.takephoto()}} style={{marginTop:10}}>
                <Image source={this.state.source} style={{width:120,height:120,backgroundColor:'white',borderRadius:60}} />
            </TouchableOpacity>
            <Text style={{fontSize:20,color:"white",marginTop:10}}>BINNU DHILLON</Text>
        </View>


        <View style={{backgroundColor:'#ffffff'}}>
            <View style={{flexDirection:'row',width:width,height:50,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#c1bdbd'}}>
                <Icon name="user" size={30} style={{marginLeft:10,color:'#4f4e4e'}}/>
                <Text style={{fontSize:18,color:'#4f4e4e',marginLeft:20}}>我的个人中心</Text>
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                    <Icon name="setting" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>账户管理</Text>
                </View>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                    <Icon name="mail" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>收货地址</Text>
                </View>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                <Icon name="customerservice" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>我的信息</Text>
                </View>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                <Icon name="copy1" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>我的订单</Text>
                </View>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                <Icon name="qrcode" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>我的二维码</Text>
                </View>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                <Icon name="eyeo" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>我的积分</Text>
                </View>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                <Icon name="staro" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>我的收藏</Text>
                </View>
            </View>
        </View>



        <View style={{backgroundColor:'#ffffff',marginTop:5}}>
            <View style={{flexDirection:'row',width:width,height:50,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#c1bdbd'}}>
            <Icon name="codepen" size={30} style={{marginLeft:10,color:'#4f4e4e'}}/>
                <Text style={{fontSize:18,color:'#4f4e4e',marginLeft:20}}>E族活动</Text>
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                <Icon name="tagso" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>居家维修保养</Text>
                </View>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                <Icon name="car" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>出行接送</Text>
                </View>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                <Icon name="adduser" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>我的受赠人</Text>
                </View>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                <Icon name="home" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>我的住宿优惠</Text>
                </View>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                    <Icon name="flag" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>我的活动</Text>
                </View>
                <View style={{width:width*0.3,height:80,alignItems:'center',justifyContent:'center'}}>
                <Icon name="shake" size={30} style={{color:'#4f4e4e',marginBottom:5}}/>
                    <TouchableOpacity ><Text style={{fontSize:18,color:'#4f4e4e',borderRightWidth:0}} onPress={()=>Actions.topics()}>我的发布</Text></TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={{width:width,justifyContent:"center",alignItems:"center",marginTop:30,marginBottom:30}}>
            <Text style={{color:'#666666',fontSize:18}}>BINNU DHILLON | <Text onPress={this.quit}>退出</Text></Text>
        </View>
        
      </ScrollView>
      </>
    );
  }
}
