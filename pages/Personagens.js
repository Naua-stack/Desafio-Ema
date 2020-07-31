import React, { Component, Fragment, useEffect, useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Axios from 'axios';

const Personagens = (props) => {
    const [Personagem, setPersonagem] = useState({
        nome: '',
        birth_year: '',
        gender: '',
        films: [],

   
    
    })
    const [nomepersonagens, setNomePersonagens] = useState('')
   

   
    const buscarPersonagens = async () => {
        try {
            const { data } = await Axios.get(`https://swapi.dev/api/people/?search=${nomepersonagens}`);
            let Personagem = data.results[0];
            const filmes = [];
            for (const [a, url] of Personagem.films.entries()) {
              const filme = await Axios.get(url);
              filmes.push({
                nomeFilme: filme.data.title,
                linkFilm: url
              })
            }
            Personagem.films = filmes;
            setPersonagem(Personagem);
           

        } catch (error) {
            console.log(error);
        }
        console.log(nomepersonagens);
    }
    return (
        <View style={styles.container}>
            {Personagem.nome !== '' &&
                <ScrollView>
                    <Text style={styles.container5}>________________________________________________________</Text>
                        <View key={Personagem.name}>
                        <Text style={styles.container2} >
                            <Text style={styles.container3}>Nome:</Text><Text style={styles.container6}> {Personagem.name} </Text>
                        </Text>
                        <Text style={styles.container2} >
                            <Text style={styles.container3}>Ano de Aniversário:</Text><Text style={styles.container6}> {Personagem.birth_year}</Text>
                        </Text>
                        <Text style={styles.container2}>
                            <Text style={styles.container3}>Gênero:</Text><Text style={styles.container6}> {Personagem.gender} </Text>
                        </Text>
                        <View>

                            <Text style={styles.container4}>
                                Clique em cima dos links Para visualizar os Filmes que o Personagem apareceu:
                                     </Text>

                            {Personagem.films.map(film => (
                                <TouchableOpacity key={film.linkFilm} onPress={() => props.navigation.navigate('InformacoesFilmes', {
                                    linkfilm: film.linkFilm
                                })}>
                                    <Text style={styles.container2}>
                                        {film.nomeFilme}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                            
                        </View>
                        <Text style={styles.container5}>________________________________________________________</Text>
                    </View>



                </ScrollView>
            }
            <View>
                <Text style={styles.container7}>Nome:</Text>
                <TextInput style={styles.input1} value={nomepersonagens} onChangeText={(text) => setNomePersonagens(text)} />
            </View>

            <View>
                <TouchableOpacity onPress={buscarPersonagens} style={styles.button1}>
                    <Text>Buscar</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000',

    },
    container3: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'yellow',
        fontStyle: 'normal'
    },

    container2: {
        color: '#fff',
        fontStyle: 'italic',
        alignItems: 'center',
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 10,
        marginEnd: 100,
        marginRight: 10,

    },
    input1: {
        color: '#000',
        height: 30,
        width: 200,
        borderRadius: 10,
        borderColor: '#000',
        backgroundColor: '#fff'


    },
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        height: 30,
        width: 200,
        marginTop: 10,
        borderRadius: 10,
        borderColor: '#000',
        backgroundColor: 'yellow'
    },
    container5: {
        color: '#fff',
        fontWeight: 'bold'
    },
    container4: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#000',

    },
    container6: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 13,
    },
    container7: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
    }

});

export default Personagens;
