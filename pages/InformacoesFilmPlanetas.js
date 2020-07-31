import React, { Component, Fragment, useEffect, useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Filmes from './Filmes';
import { ScrollView } from 'react-native-gesture-handler';
import Personagens from './Personagens';
import Axios from 'axios';
import Planetas from './Planetas';


const InformacoesFilmplanetas = (props) => {
    const [infofilmes, setInfoFilmes] = useState({
        
        characters: [],
        planets: [],


    })
    useEffect(() => {
        const linkfilm = props.route.params.linkfilm;
        // console.log(linkfilm)
        const infolink = async () => {
            try {
                const filme = await (await Axios.get(linkfilm)).data;
                const personagens = [];
                for (const [a, url] of filme.characters.entries()) {
                    const personagem = await Axios.get(url);
                    personagens.push({
                      nomePersonagem: personagem.data.name,
                      linkpersonagem: url
                    })
                  } 
                  filme.characters= personagens;
                
                  const planetas = [];
                  for (const [a, url] of filme.planets.entries()) {
                      const planeta = await Axios.get(url);
                      planetas.push({
                        nomePlaneta: planeta.data.name,
                        linkPlaneta: url
                      })
                    } 
                filme.planets= planetas;
                
                  setInfoFilmes(filme)
                console.log(filme);
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
                        <TouchableOpacity key={characters.linkpersonagem} onPress={() => props.navigation.navigate('InformacoesResidentes', {
                            linkresident: characters.linkpersonagem
                        })}>
                            <Text style={styles.container2}>
                                {characters.nomePersonagem}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <Text style={styles.container4}>
                        Clique em cima dos links Para visualizar os planetas que apareceram no filme:
                    </Text>
                    {infofilmes.planets.map(resident => (
                        <TouchableOpacity key={resident.linkPlaneta} onPress={() => props.navigation.navigate('InformacoesPlanetas', {
                            linkresident: resident.linkPlaneta
                        })}>
                            <Text style={styles.container2}>
                                {resident.nomePlaneta}
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