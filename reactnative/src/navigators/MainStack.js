import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TasksScreen from '../screens/TasksScreen';
import AboutScreen from '../screens/AboutScreen';
import TaskDetails from '../screens/TaskDetailsScreen';

const MainStack = createStackNavigator();

const headerOptions = {
  'default' : {
    headerBackTitleStyle: {
      color: '#ffffff'
    },
    headerBackButtonStyle: {
      color: '#ffffff'
    },
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#FF00FF',
    },
    headerTitleStyle: {
      color: '#FFFFFF'
    },
  },
  'Tasks': {
    headerShown: false,
  },
  'About': {
    title: 'Opa',
    headerTitleStyle: {
      color: 'darkblue'
    },
    headerStyle: {
      backgroundColor: 'cyan',
    }
  },
  'TaskDetails': ({route})=>({
    title: "Task id: " + route.params.id
  })
}

export default () => (
  <MainStack.Navigator screenOptions={headerOptions.default}>

    {/* Screens */}
    <MainStack.Screen name="Tasks" component={TasksScreen} options={headerOptions.Tasks}/>
    <MainStack.Screen name="About" component={AboutScreen} options={headerOptions.About}/>
    <MainStack.Screen name="TaskDetails" component={TaskDetails} options={headerOptions.TaskDetails}/>
  </MainStack.Navigator>
)