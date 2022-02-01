import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Button, Searchbar } from 'react-native-paper';
import { getConnection } from "typeorm";
import React from 'react'
import styled from 'styled-components/native';
import Restaurant from './Restaurant';

const Container = styled.View`
  flex: 1;
  background-color: #fdd;
`;
const SectionHeader = styled.View`
  background: red;
  text-align: center;
  padding: 60px 0 15px;
`
const TitleHeader = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
`;
const ContainerPedido = styled.Text`
  background: darkblue;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`
const InfoText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
`;

export default function Pedido({route,navigation}) {
  const [name, setName] = useState('')
  const [preco, setPreco] = useState('')

  // create an async callback for your data access (use it wherever you want- example in Button)
  const loadData = React.useCallback(async () => {
    const connection = getConnection();
       await connection.getRepository("Pedido").save({
            nome: name,
            preco: preco,
          });

       const dados = await connection.getRepository("Pedido").find();
       console.log(dados);
      
  });
  
  
  return (
 
    <Container>
        <SectionHeader>
          <TitleHeader>Lahore Pakistan</TitleHeader>
        </SectionHeader>
        <Searchbar placeholder='Search Restaurant'
          theme={{colors: {background: '#fff'}}}
           underlineColor='#fff'
           onChangeText={text => setName(text)}
        />

      <ContainerPedido>
      <InfoText>{route.params?.nome}</InfoText>
      </ContainerPedido>
      <ContainerPedido>
        <InfoText>{route.params?.preco}</InfoText>
      </ContainerPedido>

      <TextInput placeholder='Nome'
          theme={{colors: {background: '#fff'}}}
           underlineColor='#fff'
           onChangeText={text => setName(text)}
        />
      <TextInput placeholder='Pagamento'
          theme={{colors: {background: '#fff'}}}
           underlineColor='#fff'
           onChangeText={text => setPreco(text)}
        />

      <Button
      onPress={loadData}
         >
      Carregar
      </Button>
  

       
    </Container>
  );
}
