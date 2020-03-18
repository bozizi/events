import React from 'react'
import LoginEvent from './Components/Inscription'
import ConnexionEvents from './Components/Connexion'
import Formulaire from './Components/Formulaire'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import EcranAcceuil from './Navigation/EcranAcceuil'

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <EcranAcceuil/>
      </NavigationContainer>
    )
  }
}
