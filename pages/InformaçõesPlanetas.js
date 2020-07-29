
import React, { Component, Fragment, useEffect, useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Personagens from './Personagens';

const Informacoesplanetas = (props) => {

    const [Informacoesplanetas, setInfoResidentes] = useState({

        films: [],
        residents: []

    }
    )
    useEffect(() => {
        const linkresident = props.route.params.linkresident;
        console.log(linkresident)
        const infolink = async () => {
            try {

                const response = await fetch(linkresident);
                const dataJson = await response.json();

                setInfoResidentes(dataJson)
                console.log(dataJson);


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
                    <Text style={styles.container3}>Nome:</Text>{Informacoesplanetas.name}
                </Text>
                <Text style={styles.container2}>
                    <Text style={styles.container3}>Período de Rotação</Text>{Informacoesplanetas.rotation_period}
                </Text>
                <Text style={styles.container2}>
                    <Text style={styles.container3}>Período de Órbita:</Text>{Informacoesplanetas.orbital_period}
                </Text>
                <Text style={styles.container2}>
                    <Text style={styles.container3}>Diâmetro:</Text>{Informacoesplanetas.diameter}
                </Text>
                <Text style={styles.container2}>
                    <Text style={styles.container3}>Clima</Text>{Informacoesplanetas.population}
                </Text>
                 <View>

                    <Text style={styles.container4}>
                        Clique em cima dos links Para visualizar os Filmes que o Planeta apareceu apareceu:
                    </Text>
                    {Informacoesplanetas.films.map(resident => (

                        <TouchableOpacity key={resident} onPress={() => props.navigation.navigate('InformacoesFilmes', {
                            linkfilm: resident
                        })}>
                            <Text style={styles.container2}>
                                {resident}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <Text style={styles.container4}>
                       Clique em cima dos links Para visualizar os Residentes do Planeta:
                    </Text>
                    {Informacoesplanetas.residents.map(resident => (
                        <TouchableOpacity key={resident} onPress={() => props.navigation.navigate('InformacoesResidentes', {
                            linkresident: resident
                        })}>
                            <Text style={styles.container2}>
                                {resident}
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