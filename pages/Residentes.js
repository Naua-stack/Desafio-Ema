
import React, { Component, Fragment, useEffect, useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Personagens from './Personagens';
import Axios from 'axios';

const Informacoesplanetas = (props) => {

    const [inforesidentes, setInfoResidentes] = useState({
       
        films: []

    }
    )



    useEffect(() => {
        const linkresident = props.route.params.linkresident;
       // console.log(linkresident)
        const infolink = async () => {
            try {
                console.log(linkresident)
                
                const residente = await (await Axios.get(linkresident)).data;
                const filmes = [];
                for (const [a, url] of residente.films.entries()) {
                  const filme = await Axios.get(url);
                  filmes.push({
                    nomeFilme: filme.data.title,
                    linkFilm: url
                  })
                } 
                
                residente.films= filmes;
                setInfoResidentes(residente);
            } catch (error) {
                console.log(error);
            }
        }
        infolink();
    }, [])
    return (

        <View style={styles.container1}>
            <Text style={styles.container5}>________________________________________________________</Text>
            <View style={styles.container2}>
                <Text style={styles.container2}>
                    <Text style={styles.container3}>Nome:</Text>  {inforesidentes.name}
                </Text>
                <Text style={styles.container2}>
                    <Text style={styles.container3}>Ano de Aniversário</Text>  {inforesidentes.birth_year}
                </Text>
                <Text style={styles.container2}>
                    <Text style={styles.container3}>Gênero:</Text>  {inforesidentes.gender}
                </Text>
                <View>
                    <Text style={styles.container4}>
                        Clique em cima dos links Para visualizar os Filmes que o Personagem apareceu:
                    </Text>
                    {inforesidentes.films.map(resident => (
                        <TouchableOpacity key={resident.linkFilm} onPress={() => props.navigation.navigate('InformacoesFilmes', {
                            linkfilm: resident.linkFilm
                        })}>
                            <Text style={styles.container2}>
                                {resident.nomeFilme}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <Text style={styles.container5}>________________________________________________________</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000',


    },
    container2: {
        color: '#fff',
        fontStyle: 'italic',
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 10,
        marginEnd: 100,
        marginRight: 10,

    },
    container3: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'yellow',
        fontStyle: 'normal'


    }, container4: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#000',


    },

});

export default Informacoesplanetas;