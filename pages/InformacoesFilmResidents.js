import React, { Component, Fragment, useEffect, useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Residentes from './Residentes'
import Filmes from './Filmes';

const InformacoesFilmResidents = (props) => {
    const [infofilmes, setInfoFilmes] = useState({
        title: '',
        episode_id: '',
        Opening_crawl: '',

    })
    useEffect(() => {
        const linkresident = props.route.params.linkresident;
        console.log(linkresident)
        const infolink = async () => {
            try {

                const response = await fetch(linkresident);
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
                <Text style={styles.container2}>
                    <Text style={styles.container3}>Título:</Text> {infofilmes.title}
                </Text>
                <Text style={styles.container2} >
                    <Text style={styles.container3}>Episódio:</Text> {infofilmes.episode_id}
                </Text>
                <Text style={styles.container2}>
                    <Text style={styles.container3}>Texto de Abertura: </Text> {infofilmes.opening_crawl}
                </Text>
                <Text style={styles.container2}>
                    <Text style={styles.container3}>Ano de Lançamento </Text> {infofilmes.release_date}
                </Text>
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



});

export default InformacoesFilmResidents;