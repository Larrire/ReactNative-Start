import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStack from './../navigators/MainStack';
import TabAboutScreen from './../screens/TabAboutScreen';
import BarCodeScreen from './../screens/BarCodeScreen';
import QRCodeScreen from './../screens/QRCodeScreen';
import Logo1 from './../assets/icons/home.png';
import Logo2 from './../assets/icons/interface.png';

const Tab = createBottomTabNavigator();
const renderIcon = (icon) => {
  return ({focused, color, size})=>{
    return <Image style={{width: 20, height:20,}} source={icon} />
  }
}

export default () => (
  <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 15,
        },
        activeTintColor: '#fff',
        activeBackgroundColor: '#f0f',
        style: {
          height: '8%',
        },
      }}
    >
    
    <Tab.Screen name="TabTasks" component={MainStack} options={{
      title:"Tasks",
      tabBarIcon: renderIcon(Logo2),
    }}/>
    <Tab.Screen name="TabHome" component={TabAboutScreen} options={{
      title:"Home",
      tabBarIcon: renderIcon(Logo1),
    }}/>
    <Tab.Screen name="TabAbout2" component={QRCodeScreen} options={{
      title:"BarCode",
      tabBarIcon: renderIcon(Logo2),
    }}/>
    <Tab.Screen name="TabAbout3" component={QRCodeScreen} options={{
      title:"QRCode",
      tabBarIcon: renderIcon(Logo2),
    }}/>
  </Tab.Navigator>
);