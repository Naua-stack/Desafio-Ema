
import React, { Component, Fragment, useEffect, useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Planetas = (props) => {
  const [planetas, setPlanetas] = useState([])
  const [nomeplaneta, setNomePlanetas] = useState('')
  const [clima, setClima] = useState([])

  const Filmes = (props) => {
    const [filmes, setFilmes] = useState([])
    const [nomefilme, setNomeFilme] = useState('')


  }

  const onPressTitle = () => {
    console.log('Title pressed')

  };
  const buscarPersonagens = async () => {
    try {

      const response = await fetch(`https://swapi.dev/api/peoples/?search=${nomepersonagem}`);

      const dataJson = await response.json();
      setPlanetas(dataJson.results)
      //console.log(dataJson);
      //  setPlanetas(dataJson);

    } catch (error) {
      // console.log(error);
    }
    // console.log(nomefilme);
  }

  const buscarPlaneta = async () => {
    try {

      const response = await fetch(`https://swapi.dev/api/planets/?search=${nomeplaneta}`);

      const dataJson = await response.json();
      setPlanetas(dataJson.results)
      //console.log(dataJson);
      //  setPlanetas(dataJson);

    } catch (error) {
      console.log(error);
    }
    console.log(nomeplaneta);
  }



  return (
    <View style={styles.container}>

      <ScrollView>
        <Text style={styles.container5}>________________________________________________________</Text>
        {


          planetas.map(planetas => {
            return (
              <View key={planetas.name}>
                <Text style={styles.container2}>
                  <Text style={styles.container3}>Nome:</Text><Text style={styles.container6}>{planetas.name}</Text>
                </Text>
                <Text style={styles.container2}>
                  <Text style={styles.container3}>Periodo de Rotação:</Text> <Text style={styles.container6}>{planetas.rotation_period}</Text>
                </Text>
                <Text style={styles.container2}>
                  <Text style={styles.container3}>Periodo de órbita: </Text><Text style={styles.container6}>{planetas.orbital_period}</Text>
                </Text>
                <Text style={styles.container2}>
                  <Text style={styles.container3}>Diâmetro:</Text><Text style={styles.container6}> {planetas.diameter}</Text>
                </Text>
                <Text style={styles.container2}>
                  <Text style={styles.container3}>Clima:</Text><Text style={styles.container6}> {planetas.climate}</Text>
                </Text>
                <Text style={styles.container2}>
                  <Text style={styles.container3}>População:</Text> {planetas.population}
                </Text>

                <View>
                  <Text style={styles.container4}>
                    Clique em cima dos links Para visualizar os Filmes que o planeta apareceu:
                  </Text>
                  {planetas.films.map(film => (
                    <TouchableOpacity key={film} onPress={() => props.navigation.navigate('InformacoesFilmes', {
                      linkfilm: film
                    })}>
                      <Text style={styles.container2}>
                        {film}
                      </Text>
                    </TouchableOpacity>
                  ))}
                  <Text style={styles.container4}>
                    Clique em cima dos links Para visualizar os Residentes do planeta:
                  </Text>
                  {planetas.residents.map(resident => (
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
            )
          })

        }
      </ScrollView>
      <View>
        <Text style={styles.container7}>Nome:</Text>
        <TextInput style={styles.input1} value={nomeplaneta} onChangeText={(text) => setNomePlanetas(text)} />
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

