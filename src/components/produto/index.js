import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image, TouchableOpacity } from 'react-native';
import Img1 from '../../../assets/img1.jpeg'
import { useNavigation } from '@react-navigation/native';

export default function ElementProduct(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Elemente",{nameProduct: props.titulo, Price: props.preco})}>
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.content}>
           <View style={styles.contentImg}>
           <Image source={Img1}  style={styles.Img}/>
            </View>
            <Text style={styles.textDesc}> {props.titulo}</Text>
            <Text style={styles.textDesc} >{props.preco}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 5,
    
  },
  topBar:{
    padding: 1,
    backgroundColor: '#ddd',
    width: 152,
    height: 202,
  },
  textName:{
    marginTop: 30,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'right',
    width: 300,
  },
  content: {
    backgroundColor: '#fff',
    width: 150,
    height: 200,
  },
  Img:{
    width: 100,
    height: 130,
    marginLeft: 25,
  },
  textDesc:{
    marginTop: 5,
    marginLeft: 25
  }

});
