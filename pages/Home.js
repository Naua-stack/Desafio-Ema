import React from 'react';


import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Home(props) {
    return (
        <View style={styles.container}>
            <Text>Page Hello</Text>
            
            <TouchableOpacity onPress={() => {props.navigation.navigate('Planetas')}} style={styles.container1}>
           
           <Text style={styles.text1}>Planetas</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {props.navigation.navigate('Personagens')}} style={styles.container1}>
           
           <Text style={styles.text1}>Personagens</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {props.navigation.navigate('Filmes')}} style={styles.container1}>
           
           <Text style={styles.text1}>Filmes</Text>
         </TouchableOpacity>
         <Text style={styles.container2}>Developed by: Nauã Fernandes</Text>
        </View>
       
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000'
    },
    container1: {
    color: '#fff',
    height: 30,
    width: 200,
    borderRadius: 10,
    marginTop:15,
    borderColor: '#000',
    backgroundColor :'yellow'
  
    },
    text1:{
        textAlign:"center",
        padding: 1,
        flex: 1,
        
        fontSize: 20,
    },
    container2:{
        fontWeight: "bold",
        fontSize: 15,
        color: '#fff',
        position: 'absolute', left: 20, right: 0, bottom: 0,
    }
});