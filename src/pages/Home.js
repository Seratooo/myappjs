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

export default function Home({navigation}) {



  const [name, setName] = useState('')
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
        <Restaurant/>
    </Container>
  );
}
