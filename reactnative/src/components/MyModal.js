import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

const BgMyModal = styled.View`
width: 100%;
height: 100%;
background-color: rgba(255,255,255,0.8);
align-items: center;
justify-content: center;
`;
const MyModalBody = styled.View`
padding: 20px;
border: 1px solid lightgray;
border-radius: 15px;
background-color: rgb(255,255,255);
width: 90%;
`;

const CloseModal = styled.Text`
  position: absolute;
  top: 0;
  height: 50px;
  width: 50px;
  right: 0;
  border-radius: 25px;
  text-align: center;
  background: #eee;
  padding: 15px;
  border: 1px solid lightgray;
  margin: 20px;
`

export default (props) => {
return (
  <Modal
    visible={props.visible}
    transparent={true}
    animationType="fade"
  >
  <BgMyModal>
    <CloseModal onPress={()=>props.controlVisible(false)}>X</CloseModal>
    <MyModalBody>
      {props.children}
    </MyModalBody>
  </BgMyModal>
</Modal>
)
}