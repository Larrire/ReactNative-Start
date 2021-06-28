import React, { useState, useEffect } from 'react';
import { Button, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import FlatList from '../components/FlatList';
import MyModal from '../components/MyModal';
import AsyncStorage from '@react-native-community/async-storage';
import Navbar from '../components/Navbar';

function compareDone( a, b ) {
  if ( b.done ){
    return -1;
  }
  if ( a.done ){
    return 1;
  }
  return 0;
}
function compareId( a, b ) {
  if ( a.id < b.id ){
    return -1;
  }
  if ( a.id > b.id ){
    return 1;
  }
  return 0;
}

const Page = styled.SafeAreaView`
  background-color: rgb(219, 233, 246);
  height:100%;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #555;
`;

const TitleModal = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

const ModalTextInput = styled.TextInput`
  background-color: #eee;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;sdsdd
`;

const Flat = styled.FlatList`

`;

const Tasks = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [todos, setTodos] = useState([]);
  const [ordenedTodos, setOrdenedTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [lastId, setLastId] = useState(0);

  const LargeButton = (props) => {
    const ElementButton = styled.TouchableOpacity`
    width: 100%;
    background: ${props.bgColor ?? '#ccc'};
    padding: ${props.padding ?? '13px'};
    border-radius: 40px;
    margin-bottom: 10px;
  `;
  const ElementText = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: ${props.color ?? '#555'};
    text-align: center;
  `;
    return (
      <ElementButton onPress={props.onPress}>
        <ElementText>{props.title}</ElementText>
      </ElementButton>
    )
  }

  const saveNewTodo = async () => {
    const objNewTodo = {
      id: lastId + 1,
      task: newTodo,
      done: false
    }
    const newTodosArray = [...todos, objNewTodo];
    setNewTodo('');
    setModalVisible(false);
    setTodos(newTodosArray);
    await saveTodos(newTodosArray);
    getTodos();
  }

  const saveTodos = async (newTodosArray) => {
    await AsyncStorage.setItem('@todos', JSON.stringify(newTodosArray));
  }

  const getTodos = async () => {
    try {
      let storagedTodos = await AsyncStorage.getItem('@todos');
      storagedTodos = JSON.parse(storagedTodos);
      setTodos(storagedTodos);

      const newLastId = (storagedTodos.length > 0)
        ? storagedTodos[storagedTodos.length - 1].id
        : storagedTodos.length - 1

      setLastId(newLastId);

      const newOrdenedTodos = [...storagedTodos];
      newOrdenedTodos.sort( compareId );
      newOrdenedTodos.sort( compareDone );

      setOrdenedTodos(newOrdenedTodos);
    } catch (e) {
      console.log(e)
    }
  }

  const toggleDone = (itemId) => {
    const newTodosArray = todos.map(function(item, index){ 
        (item.id === itemId) && (item.done = !item.done);
        return item;
    });
    saveTodos(newTodosArray);
    getTodos();
  }

  const deleteTodo = (itemId) => {
    const newTodosArray = todos.filter(function(item, index){ 
      return (itemId !== item.id);
    });
    saveTodos(newTodosArray);
    getTodos();
  }

  const deleteAll = () => {
    saveTodos([]);
    getTodos();
  }

  useEffect(()=>{
    getTodos();
  }, []);

  return <>
      <Page>
        <StatusBar barStyle="light-content" backgroundColor="#f0f" />
        <LargeButton bgColor="#f0f" color="#fff" title="Add task" onPress={()=>setModalVisible(true)}/>
        <MyModal visible={modalVisible} controlVisible={setModalVisible}>
          <TitleModal>Add new task</TitleModal>
          <ModalTextInput value={newTodo} onChangeText={text=>setNewTodo(text)}/>
          <Button title="Save task" onPress={saveNewTodo}/>
        </MyModal>
        <Flat
          data={ordenedTodos}
          renderItem={({item, index})=><FlatList data={{...item, index, toggleDone, deleteTodo}} />}
          keyGenerator={(item, index)=>item.id}
        />
      </Page>
    </>
}

export default Tasks;