import React, { Component, Fragment, useEffect, useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Personagens = (props) => {
    const [Personagens, setPersonagens] = useState([])
    const [nomepersonagens, setNomePersonagens] = useState('')
    const [generopersonagens, setGeneroPersonagens] = useState('')

    const onPressTitle = () => {

        console.log('Title pressed')

    };

    const buscarPersonagens = async () => {
        try {

            const response = await fetch(`https://swapi.dev/api/people/?search=${nomepersonagens}`);

            const dataJson = await response.json();
            setPersonagens(dataJson.results)
            //console.log(dataJson);
            //  setPlanetas(dataJson);

        } catch (error) {
            console.log(error);
        }
        console.log(nomepersonagens);
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.container5}>________________________________________________________</Text>
                {
                    Personagens.map(Personagens => {
                        return (

                            <View key={Personagens.name}>
                                <Text style={styles.container2} >
                                    <Text style={styles.container3}>Nome:</Text><Text style={styles.container6}> {Personagens.name} </Text>
                                </Text>
                                <Text style={styles.container2} >
                                    <Text style={styles.container3}>Ano de Aniversário:</Text><Text style={styles.container6}> {Personagens.birth_year}</Text>
                                </Text>
                                <Text style={styles.container2}>
                                    <Text style={styles.container3}>Gênero:</Text><Text style={styles.container6}> {Personagens.gender} </Text>
                                </Text>
                                <View>

                                    <Text style={styles.container4}>
                                        Clique em cima dos links Para visualizar os Filmes que o Personagem apareceu:
                                     </Text>

                                    {Personagens.films.map(film => (
                                        <TouchableOpacity key={film} onPress={() => props.navigation.navigate('InformacoesFilmes', {
                                            linkfilm: film
                                        })}>
                                            <Text style={styles.container2}>
                                                {film}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                    <Text style={styles.container5}>________________________________________________________</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>

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
