import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Planetas from './pages/Planetas'
import Home from './pages/Home'
import Personagens from './pages/Personagens'
import InformacoesFilmes from './pages/InformacoesFilmPlanetas'
import InformacoesResidentes from './pages/Residentes'
import InformacoesFilmsResidentes from './pages/InformacoesFilmResidents'
import InformacoesPlanetas from './pages/InformaçõesPlanetas'
import Filmes from './pages/Filmes';


const Stack = createStackNavigator();
export default function Routes() {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Planetas" component={Planetas} />
                <Stack.Screen name="Personagens" component={Personagens} />
                <Stack.Screen name="Filmes" component={Filmes} />
                <Stack.Screen name="InformacoesFilmes" component={InformacoesFilmes} />
                <Stack.Screen name="InformacoesResidentes" component={InformacoesResidentes} />
                <Stack.Screen name="InformacoesFilmsResidentes" component={InformacoesFilmsResidentes} />
                <Stack.Screen name="InformacoesPlanetas" component={InformacoesPlanetas} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}