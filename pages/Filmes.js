import React, { Component, Fragment, useEffect, useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Filmes = (props) => {
    const [Filmes, setFilmes] = useState([])
    const [nomefilmes, setNomeFilmes] = useState('')
    const [generopersonagens, setGeneroPersonagens] = useState('')

    const onPressTitle = () => {

        console.log('Title pressed')

    };

    const buscarFilmes = async () => {
        try {

            const response = await fetch(`https://swapi.dev/api/films/?search=${nomefilmes}`);

            const dataJson = await response.json();
            setFilmes(dataJson.results)
            //console.log(dataJson);
            //  setPlanetas(dataJson);

        } catch (error) {
            console.log(error);
        }
        console.log(nomefilmes);
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.container5}>________________________________________________________</Text>
                {
                    Filmes.map(Filmes => {
                        return (

                            <View key={Filmes.title}>
                                <Text style={styles.container2} onPress={onPressTitle}>
                                    <Text style={styles.container3}>Título:</Text><Text style={styles.container6}> {Filmes.title} </Text>
                                </Text>
                                <Text style={styles.container2} onPress={onPressTitle}>
                                    <Text style={styles.container3}>Episódio:</Text><Text style={styles.container6}> {Filmes.episode_id} </Text>
                                </Text>
                                <Text style={styles.container2} onPress={onPressTitle}>
                                    <Text style={styles.container3}>Texto de Abertura:</Text><Text style={styles.container6}> {Filmes.opening_crawl}</Text>
                                </Text>
                                <Text style={styles.container2} onPress={onPressTitle}>
                                    <Text style={styles.container3}>Ano de Lançamento:</Text><Text style={styles.container6}> {Filmes.release_date}</Text>
                                </Text>
                                <Text style={styles.container4}>
                                    Clique em cima dos links Para visualizar os personagens do Filmes:
                                </Text>
                                {Filmes.characters.map(resident => (
                                    <TouchableOpacity key={resident} onPress={() => props.navigation.navigate('InformacoesResidentes', {
                                        linkresident: resident
                                    })}>
                                        <Text style={styles.container2}>
                                            {resident}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                                <Text style={styles.container4}>
                                    Clique em cima dos links Para visualizar os planetas que apareceram no filme:
                                 </Text>
                                {Filmes.planets.map(resident => (
                                    <TouchableOpacity key={resident} onPress={() => props.navigation.navigate('InformacoesPlanetas', {
                                        linkresident: resident
                                    })}>
                                        <Text style={styles.container2}>
                                            {resident}
                                        </Text>
                                    </TouchableOpacity>
                                ))}

                                <Text style={styles.container5}>________________________________________________________</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>

            <View>
                <Text style={styles.container7}>Nome:</Text>
                <TextInput style={styles.input1} value={nomefilmes} onChangeText={(text) => setNomeFilmes(text)} />

            </View>

            <View>
                <TouchableOpacity onPress={buscarFilmes} style={styles.button1}>
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
        fontSize: 13,
        fontWeight: 'bold',
        color: 'yellow',
        fontStyle: 'normal'
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

export default Filmes;
