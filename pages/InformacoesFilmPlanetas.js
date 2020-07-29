import React, { Component, Fragment, useEffect, useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Filmes from './Filmes';
import { ScrollView } from 'react-native-gesture-handler';

const InformacoesFilmplanetas = (props) => {
    const [infofilmes, setInfoFilmes] = useState({
        title: '',
        episode_id: '',
        Opening_crawl: '',
        characters: [],
        planets: [],


    })
    useEffect(() => {
        const linkfilm = props.route.params.linkfilm;
        console.log(linkfilm)
        const infolink = async () => {
            try {
                const response = await fetch(linkfilm);
                const dataJson = await response.json();
                setInfoFilmes(dataJson)
                console.log(dataJson);
            } catch (error) {
                console.log(error);
            }
        }
        infolink();
    }, [])
    return (
        <View style={styles.container1}>
            <View>
                <ScrollView>
                    <Text style={styles.container2}>
                        <Text style={styles.container3}>Título:</Text>{infofilmes.title}
                    </Text>
                    <Text style={styles.container2}>
                        <Text style={styles.container3}>Episódio:</Text>{infofilmes.episode_id}
                    </Text>
                    <Text style={styles.container2}>
                        <Text style={styles.container3}>Texto de Abertura: </Text> {infofilmes.opening_crawl}
                    </Text>
                    <Text style={styles.container2}>
                        <Text style={styles.container3}>Ano de Lançamento </Text> {infofilmes.release_date}
                    </Text>
                    <Text style={styles.container4}>
                        Clique em cima dos links Para visualizar os personagens que participaram do filme:
                    </Text>
                    {infofilmes.characters.map(characters => (
                        <TouchableOpacity key={characters} onPress={() => props.navigation.navigate('InformacoesResidentes', {
                            linkresident: characters
                        })}>
                            <Text style={styles.container2}>
                                {characters}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <Text style={styles.container4}>
                        Clique em cima dos links Para visualizar os planetas que apareceram no filme:
                    </Text>
                    {infofilmes.planets.map(resident => (
                        <TouchableOpacity key={resident} onPress={() => props.navigation.navigate('InformacoesPlanetas', {
                            linkresident: resident
                        })}>
                            <Text style={styles.container2}>
                                {resident}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
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
        fontSize: 10,
        color: 'yellow',
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#000',

    },

    container4: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#000',

    },

});

export default InformacoesFilmplanetas;