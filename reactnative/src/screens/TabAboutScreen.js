import React from 'react';
import styled from 'styled-components/native';
import { Text, Imagem, FlatList, TouchableHighlight } from 'react-native';

const MyButton = styled.TouchableHighlight`
  width: 100%;
  background: deepskyblue;
  elevation: 3;
  padding: 10px;
  text-align: center;
  align-items: center;
  margin-bottom: 10px;
`;

const MyItem = ({title, onPress}) => {
  return <MyButton onPress={(onPress) ?? (()=>alert(title))}>
    <Text>{title}</Text>
  </MyButton>
}

const renderItem = ({item}) => {
  return <MyItem title={item.title} onPress={item.onPress}/>
}

const list = [
  {title:'Opa 1'},
  {title:'Opa 2', onPress:()=>alert('Eu sou par')},
  {title:'Opa 3'},
  {title:'Opa 4', onPress:()=>alert('Eu sou par')},
  {title:'Opa 5'},
  {title:'Opa 6', onPress:()=>alert('Eu sou par')},
  {title:'Opa 7'},
  {title:'Opa 8', onPress:()=>alert('Eu sou par')},
  {title:'Opa 9'},
  {title:'Opa 10', onPress:()=>alert('Eu sou par')},
  {title:'Opa 1'},
  {title:'Opa 2', onPress:()=>alert('Eu sou par')},
  {title:'Opa 3'},
  {title:'Opa 4', onPress:()=>alert('Eu sou par')},
  {title:'Opa 5'},
  {title:'Opa 6', onPress:()=>alert('Eu sou par')},
  {title:'Opa 7'},
  {title:'Opa 8', onPress:()=>alert('Eu sou par')},
  {title:'Opa 9'},
  {title:'Opa 10', onPress:()=>alert('Eu sou par')},
  {title:'11', onPress:()=>alert('Eu sou par')},
]

export default () => {
  return <>
    <MyItem title="Opa" onPress={()=>alert('ssdsdsddsd')}/>
    <MyItem title="Teste"/>
    <FlatList 
      data={list}
      renderItem={renderItem}
      keyExtractor={(item, key)=>key}
    />
  </>
}