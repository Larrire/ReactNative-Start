import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const TaskView = styled.View`
    background-color: #fff;
    padding: 15px;
    margin-top: 15px;
    border-radius: 15px;
    flex-direction: column;
    position: relative;
    z-index:1;
`;

const TaskSection = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const TaskTitle = styled.Text`
    font-size: 18px;
    color: #555;
    max-width: 80%;
    align-self: center;
`;

const BasicOptions = styled.View`
    flex-direction: row;
    align-self: center;
`;

const OtherOptions = (props) => {
    const [show, setShow] = useState(true);
    const Element = styled.View`
        justify-content: flex-end;
        flex-direction: row;
    `
    return (
        <Element style={show?{display:'flex'}:{display:'none'}}>{props.children}</Element>
    )
}

const Option = styled.TouchableOpacity`
    background-color: rgba(219, 233, 246, 0.8);
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-left: 10px;
`;

const styles = StyleSheet.create({
    done: {
        backgroundColor: '#f0f',
        color: '#fff',
    },
    todo: {
        backgroundColor: 'pink'
    }
})


export default (props) => {
    const taskDetails = (id) => {
        navigation.navigate("TaskDetails", {id})
    }

    const navigation = useNavigation();

    return (
    <TaskView style={props.data.done && styles.done}>
        <TaskSection>
            <TaskTitle style={props.data.done&&{color:'#fff', fontWeight:'bold'}}>
                <Text>{props.data.id+1}- </Text>
                {props.data.task}
            </TaskTitle>
            <BasicOptions style={props.data.done && styles.done}>
                <Option onPress={()=>props.data.toggleDone(props.data.id)}><Text>{props.data.done?'Uncheck':'Check'}</Text></Option>
                <Option onPress={()=>taskDetails(props.data.id)}><Text>More</Text></Option>
            </BasicOptions>
        </TaskSection>
        <OtherOptions className="teste" data-teste="1" style={props.data.done && styles.done}>
            <Option style={{flex:1}} onPress={()=>props.data.toggleDone(props.data.id)}><Text>Edit</Text></Option>
            <Option style={{flex:1}} onPress={()=>props.data.deleteTodo(props.data.id)}><Text>Delete</Text></Option>
        </OtherOptions>
    </TaskView>
    )
}