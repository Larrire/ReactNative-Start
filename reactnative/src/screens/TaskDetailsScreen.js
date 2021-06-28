import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {

  const route = useRoute();
  const [task, setTask] = useState({
    id: null,
    task:'Carregando...',
    done:false
  });  

  const getTask = async () => {
    try {
      let storagedTodos = await AsyncStorage.getItem('@todos');
      storagedTodos = JSON.parse(storagedTodos);

      storagedTodos.map(todo => {
        if( route.params.id === todo.id ){
          setTimeout(()=>{
            setTask(todo)
          }, 2000);
        }
      });
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(()=>{
    getTask()
  }, []);

  return <>
    <View>
      <Text>Id = {task.id}</Text>
      <Text>Task = {task.task}</Text>
      <Text>Done = {task.done.toString()}</Text>
    </View>
  </>
}