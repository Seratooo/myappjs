import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import Img1 from '../../assets/img1.jpeg'
import styled from 'styled-components/native';
import JsonFile from '../model/jsonFile.json';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
var Json = JsonFile;

const Container = styled.View`
  background-color: #fff;
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


 axios.get("https://raw.githubusercontent.com/Budy-Dev/teste/main/fastfood.json")
      .then(res => {
        Json = res.data;    
}) 


const testImg = 'kfcLogo.png'
export default function Restaurant() {
  const navigation = useNavigation();
  return (
    <Container>
        
    {Json.map( (file, index) => 
          
      <TouchableOpacity key={index} onPress={()=> navigation.navigate("Detail-st", {file}) } >
          <ContainerRestaurant>
          <ContainerImg>
            <Image source={ require('../../assets/kfcLogo.png')} style={{width: 80, height: 80, borderRadius: 100}} />
            </ContainerImg>
    
          <ContainerText>
            <Title>{file.nome} - {file.localizacao}</Title>
            <LocationText>{file.distancia}</LocationText>
          </ContainerText> 
        </ContainerRestaurant>
      </TouchableOpacity>
    )}
    </Container>
  );
}
