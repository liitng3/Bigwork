
import React, { Component } from 'react';
import {View,Text,TouchableOpacity,ToastAndroid} from 'react-native';

export default class Topics extends Component {
    constructor(){
        super();
        this.arr = ["gray","#f23030"]
        this.arr1=["已回复","待回复"]
        this.page=1
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page='+this.page+'&limit=12')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data: res.data
            });
        })
        
    }
    up=()=>{
        if(this.page === 1) {
            ToastAndroid.showWithGravity(
                "           到头啦           ",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
        }
        if(this.page !== 1){
            this.page--
        }
        fetch('https://cnodejs.org/api/v1/topics?page='+this.page+'&limit=12')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data: res.data
            });
        })
    }
    down=()=>{
        this.page++
        fetch('https://cnodejs.org/api/v1/topics?page='+this.page+'&limit=12')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data: res.data
            });
        })
    }
    render() {
        return (
            <>  
                <View style={{width:"100%",height:20,backgroundColor:'white'}}></View>
                <View style={{width:"100%",backgroundColor:'white'}}>
                    {
                        this.state.data.map((item) => {
                            var num=Math.round(Math.random());
                            if(item.title.length > 15) {
                                var title = item.title.slice(0,15) + '......'
                            }
                            else{
                                var title = item.title
                            }
                            return(
                                <View style={{flexDirection:'row',width:"90%",height:50,justifyContent:'space-between',marginLeft:"5%",color:"gray",fontSize:16}}>
                                    <View style={{width:"70%"}}><Text style={{color:'#7d7d7d',fontSize:12}}>{title}</Text></View>
                                    <View><Text style={{color:'gray'}}>{item.create_at.slice(0,10)}</Text></View>
                                    <View><Text style={{color:this.arr[num]}}>{this.arr1[num]}</Text></View>
                                </View> 
                            )
                        
                            
                           
                        })                    
                    }
                </View>
                <View style={{width:"100%",position:'absolute',bottom:80,flexDirection:'row',justifyContent:'space-around'}}>
                    <View><TouchableOpacity style={{borderRadius:28,width:100,height:40,backgroundColor:'#f23030',alignItems:'center',justifyContent:"center"}} onPress={this.up}><Text style={{fontSize:18,color:"white"}}>上一页</Text></TouchableOpacity></View>
                    <View style={{justifyContent:"center"}}><Text style={{fontSize:18}}>第{this.page}页</Text></View>
                    <View><TouchableOpacity style={{borderRadius:28,width:100,height:40,backgroundColor:'#f23030',alignItems:'center',justifyContent:"center"}} onPress={this.down}><Text style={{fontSize:18,color:"white"}}>下一页</Text></TouchableOpacity></View>
                </View>
            </>
        )
    }
}