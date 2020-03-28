import React,{useState,useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid,AsyncStorage,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import User from './src/user/index';
import Home from './src/home/index';
import Goods from './src/goods/index';
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import Topics from './src/user/Topics';
import Register from './src/common/Register';
console.disableYellowBox = true;


const App = () => {
  let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			if(res){
				setInstall(false);
			}
		})
		// AsyncStorage.removeItem('user');
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
	return (
    <>
	
    <Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
				}else{
					console.log("111")
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
				
			}}
		>
      <Overlay>
			<Modal key="modal" hideNavBar>
			<Lightbox key="lightbox">
            <Drawer 
              key="drawer"
              contentComponent={()=><Text>drawer</Text>}
              drawerIcon={()=><Icon name="menu"/>}
              drawerWidth={400}
            >
              <Scene key='root'>
                <Tabs 
                  key='tabbar'
                  hideNavBar
                  activeTintColor='#f23636'
                  inactiveTintColor='#666666'
                  tabBarStyle={{backgroundColor:'#ffffff',height:49}}
                >
                  
                    <Scene key='home'
                      hideNavBar
                      title='首页'
                      icon={
                        ({focused})=>
                        <Icon name="home" size={30}  color={focused?'#f23636':'#666666'}/>
                      }
                    >
                      <Scene key='home' component={Home}/>
                    </Scene>
                    


                    <Scene key='shop'
                      hideNavBar
                      title="商品分类"
                      icon={
                        ({focused})=>
                        <Icon name="shopping-bag" size={30}  color={focused?'#f23636':'#666666'}/>
                      }
                    >
                      <Scene key='goods' component={Goods} />
                    </Scene>



                  
                    <Scene key='me'
                      hideNavBar
                      hideDrawerButton
                      title='个人中心'
                      icon={
                        ({focused})=>
                        <Icon name="user" size={30}  color={focused?'#f23636':'#666666'}/>
                      }
                    >
                      <Scene key='user' component={User}/>
                      
                    </Scene>
                    
                </Tabs>
				<Scene key="topics" 
					component={Topics} 
					title="我的发布" 
					back='true'
					hideTabBar
					titleStyle={{flex:1,textAlign:'center',color:'white'}} //标题（消息）居中
					renderRightButton={<TouchableOpacity><Image source={require('./assets/dian.png')}/></TouchableOpacity>}
					backButtonTintColor='white'
					navigationBarStyle={{backgroundColor:'#f23030'}}
				/>
              </Scene>
            </Drawer>	
			</Lightbox>
          	<Scene initial={!isLogin} key="login" component={Login} />
			<Scene key="register" component={Register} />
			</Modal>
			</Overlay>
    </Router>
    </>
	);
};

export default App;