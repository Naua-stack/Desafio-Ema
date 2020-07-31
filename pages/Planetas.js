
import React, { Component, Fragment, useEffect, useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Axios from 'axios';


const Planetas = (props) => {
  const [planeta, setPlaneta] = useState({
    nome: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climat: '',
    population: '',
    residents: [],
    films: []
    

  })
  const [nomeplaneta, setNomePlaneta] = useState('')

  const buscarPlaneta = async () => {
    try {

      const { data } = await Axios.get(`https://swapi.dev/api/planets/?search=${nomeplaneta}`);
      let planeta = data.results[0];
      const filmes = [];
      for (const [a, url] of planeta.films.entries()) {
        const filme = await Axios.get(url);
        filmes.push({
          nomeFilme: filme.data.title,
          linkFilm: url
        })
      }
      planeta.films = filmes;
      const residentes = [];
      for (const [b, url2] of planeta.residents.entries()) {
        const residente = await Axios.get(url2);
        residentes.push({
          nomeResidente: residente.data.name,
          linkResidente: url2
        })
      }
      planeta.residents = residentes;
      setPlaneta(planeta);


     
      


    } catch (error) {
      console.log(error);
    }
    console.log(nomeplaneta);
  }


  return (
    <View style={styles.container}>
      {planeta.nome !== '' &&
        <ScrollView>
          <Text style={styles.container5}>________________________________________________________</Text>
          <View key={planeta.name}>
            <Text style={styles.container2}>
              <Text style={styles.container3}>Nome:</Text><Text style={styles.container6}>{planeta.name}</Text>
            </Text>
            <Text style={styles.container2}>
              <Text style={styles.container3}>Periodo de Rotação:</Text> <Text style={styles.container6}>{planeta.rotation_period}</Text>
            </Text>
            <Text style={styles.container2}>
              <Text style={styles.container3}>Periodo de órbita: </Text><Text style={styles.container6}>{planeta.orbital_period}</Text>
            </Text>
            <Text style={styles.container2}>
              <Text style={styles.container3}>Diâmetro:</Text><Text style={styles.container6}> {planeta.diameter}</Text>
            </Text>
            <Text style={styles.container2}>
              <Text style={styles.container3}>Clima:</Text><Text style={styles.container6}> {planeta.climate}</Text>
            </Text>
            <Text style={styles.container2}>
              <Text style={styles.container3}>População:</Text> {planeta.population}
            </Text>

            <View>
              <Text style={styles.container4}>
                Clique em cima dos links Para visualizar os Filmes que o planeta apareceu:
                  </Text>
              {planeta.films.map(filme => (
                <TouchableOpacity key={filme.linkFilm} onPress={() => props.navigation.navigate('InformacoesFilmes', {
                  linkfilm: filme.linkFilm
                })}>
                  <Text style={styles.container2}>
                    {filme.nomeFilme}
                  </Text>
                </TouchableOpacity>
              ))}
              <Text style={styles.container4}>
                Clique em cima dos links Para visualizar os Residentes do planeta:
                  </Text>
              {planeta.residents.map(residente => (
                <TouchableOpacity key={residente.linkresidente} onPress={() => props.navigation.navigate('InformacoesResidentes', {
                  linkresident: residente.linkResidente
                })}>
                  <Text style={styles.container2}>
                    {residente.nomeResidente}
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
        <TextInput style={styles.input1} value={nomeplaneta} onChangeText={(text) => setNomePlaneta(text)} />
      </View>
      <View>
        <TouchableOpacity onPress={buscarPlaneta} style={styles.button1}>
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
  container4: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#000',

  },
  container5: {
    color: '#fff',
    fontWeight: 'bold'
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

export default Planetas;

