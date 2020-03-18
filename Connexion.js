import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, TouchableOpacity, Image, CheckBox, ScrollView, KeyboardAvoidingView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginEvent from './Inscription'
import EcranAcceuil from '../Navigation/EcranAcceuil'

class ConnexionEvents extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      checked: false
    }
  }

  _validation() {
    if ((this.mail==null)||(this.mdp==null)){
      alert('Champ(s) non rempli(s)')
    }else {
      alert('TOUT EST BON')
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30} enabled>
          <ScrollView style={{marginTop: 0}} keyboardShouldPersistTaps='always'>
            <View style={styles.logo_container}>
              <Image style={{width: 250, height: 80}} resizeMode="contain" source={{uri: 'https://upload.wikimedia.org/wikipedia/fr/d/de/Logo_Paris_Descartes.png'}}/>
              <Text style={styles.logo_text}>Events</Text>
            </View>

            <View style={styles.input}>
              <TextInput
                onChangeText={(text) => {this.mail = text}} 
                style={styles.textInput}
                placeholder={'Adresse mail'}
                placeholderTextColor="lightgray"
                />
              <TextInput
                onChangeText={(text) => {this.mdp = text}}
                style={styles.textInput}
                placeholder={'Mot de passe'}
                placeholderTextColor="lightgray"
                secureTextEntry={!this.state.checked}
                keyboardType='default'
              />
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginHorizontal: 19}}>
                <TouchableOpacity style={(this.state.checked == true)?styles.checkedBox:styles.uncheckedBox} onPress={() => {this.setState({checked: !this.state.checked})}}>
                  <Image style={{width: 15, marginHorizontal:15, marginVertical:15}} source={require('../Image/checklogo.png')} resizeMode='contain'/>
                </TouchableOpacity>
                <Text style={{color: 'white', fontSize: 13, flexWrap: 'wrap', marginRight: 35, marginLeft: 10}}>Afficher le mot de passe</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => this._validation()}>
                <Text style={styles.button_text}>Terminé</Text>
              </TouchableOpacity>
              <View style={{flexDirection:'row', marginLeft: 20, marginTop:10, marginBottom:20}}>
                <Text style={{color:'white'}}>Pas encore inscrit ? </Text>
                <TouchableOpacity style={{}} onPress={() => this.props.navigation.navigate('Inscription')}>
                  <Text style={{color:'cyan'}}>Créer un compte</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles =StyleSheet.create({
  container: {
      backgroundColor:'#ffffff',
      flex: 1,
      justifyContent: 'center'
  },
  logo_container: {
      alignItems: 'center',
  },
  logo_text: {
      color: '#cc0033',
      fontSize: 50,
      fontWeight: '500',
      marginTop: 10,
      fontWeight: 'bold',
      marginBottom: 25
  },
  input: {
      borderRadius: 25,
      backgroundColor: '#cc0033',
      color: 'blue',
      marginHorizontal: 25,
  },
  button: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#980026',
      marginTop: 20,
      borderRadius: 25,
      marginLeft: 20,
      marginRight: 20
  },
  button_text: {
      fontSize: 20,
      color: 'white'
  },
  textInput: {
      fontSize: 15,
      color: 'white',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#980026',
      borderRadius: 25,
      paddingLeft: 10,
      height: 40
  },
  headerText: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
    marginTop: 15,
    fontWeight: 'bold'
  },
  textInputDate: {
    fontSize: 15,
    color: 'white',
    backgroundColor: '#980026',
    borderRadius: 10,
    paddingLeft: 5
  },
  uncheckedBox: {
    backgroundColor: '#cc0033',
    borderWidth: 4,
    borderColor: '#980026',
    borderRadius: 5,
    height: 25,
    width: 25,
    justifyContent:'center',
    alignItems:'center'
  },
  checkedBox: {
    backgroundColor: '#980026',
    borderWidth: 4,
    borderColor: '#980026',
    borderRadius: 5,
    height: 25,
    width: 25,
    justifyContent:'center',
    alignItems:'center'
  }
})
  
export default ConnexionEvents