import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { TextInput,Button, Searchbar } from 'react-native-paper';
import { getConnection } from "typeorm";
import Img1 from '../../assets/img1.jpeg'
import React from 'react'
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const SectionHeader = styled.View`
  background: red;
  text-align: center;
  padding: 60px 0 15px;
`;
const TitleHeader = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
`;
const ContainerRestaurant = styled.View`
  display: flex;
  flex-direction: row;
  align-Items: center;
  width: 100%;
  height: 100px;
  border: 1px solid #ddd;
`;
const ContainerImg = styled.View`
  padding: 10px;
`;
const ContainerText = styled.View`
 display: flex;
 flex-direction: column;
`;
const Title = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;
const LocationText= styled.Text`
    font-size: 14px;
    font-weight: 400;
`;
const ContainerImgMain = styled.View`
  width: 100%;
  height: 150px;
  background: #444;
`

export default function Home({route,navigation}) {
  const Json = route.params.file;
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
      <ContainerImgMain>
      <Image source={require('../../assets/kfcImage.jpg')} style={{height: 150, width: 500}} />
      </ContainerImgMain>

     {Json.cardapio.map( (file, index) =>    
          <TouchableOpacity key={index} onPress={()=> navigation.navigate("Pedido-st", {nome: file.opcao, preco: file.preco })} >
              <ContainerRestaurant key={index}>
              <ContainerImg>
                <Image source={require('../../assets/kfcImage.jpg')} style={{width: 80, height: 80, borderRadius: 100}} />
              </ContainerImg>
        
              <ContainerText>
                <Title>{file.opcao}</Title>
                <LocationText>{file.preco}</LocationText>
              </ContainerText> 
            </ContainerRestaurant>
          </TouchableOpacity>
        )}

    </Container>
  );
}
