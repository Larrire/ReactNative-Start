import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Navbar = styled.View`
    position: absolute;
    z-index: 10;
    bottom: 0;
    border: 1px rgba(2, 76, 138, 0.3);
    borderBottomWidth: 0;
    borderRightWidth: 0;
    borderLeftWidth: 0;
    width: 100%;
    background-color: rgb(233, 238, 244);
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
`;

const NavbarButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const NavbarButtonText = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;

  text-align: center;
  color: #024C8A;
`;

const styles = {
  activeTextNavbarButton: {
    color: '#117CFE'
  }
}



export default ({activeRoute}) => {

  const navigation = useNavigation();

  function navigate(screen){
    navigation.navigate(screen);
  }

  return <Navbar>
      <NavbarButton onPress={()=>navigate('Tasks')}>
        <NavbarButtonText style={ (activeRoute==='tasks') && styles.activeTextNavbarButton }>Tasks</NavbarButtonText>
      </NavbarButton>
      <NavbarButton onPress={()=>navigate('About')}>
        <NavbarButtonText style={ (activeRoute==='novaLista') && styles.activeTextNavbarButton }>About</NavbarButtonText>
      </NavbarButton>
      <NavbarButton onPress={()=>navigate('opa')}>
        <NavbarButtonText style={ (activeRoute==='capturaInstantanea') && styles.activeTextNavbarButton }>Captura instantânea</NavbarButtonText>
      </NavbarButton>
      <NavbarButton onPress={()=>navigate('opa')}>
        <NavbarButtonText style={ (activeRoute==='opcoes') && styles.activeTextNavbarButton }>Opções</NavbarButtonText>
      </NavbarButton>
  </Navbar>
}