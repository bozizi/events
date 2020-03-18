import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, TouchableOpacity, Image, CheckBox, ScrollView, KeyboardAvoidingView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


class LoginEvent extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      checked: false
    }
  }

  _validation() {
    if ((this.nom==null)||(this.prenom==null)||(this.mail1==null)||(this.mail2==null)){
      alert('Champ(s) non rempli(s)')
    }
    else {
      if(!this.mail1.endsWith('@etu.parisdescartes.fr')){
        alert('Erreur: l\'adresse mail rentrée n\'est pas une adresse paris descartes.')
      }else if(this.mail1!=this.mail2){
        alert('Le premier mail est différent du second')
      }else if(this.state.checked==false){
        alert('Veuillez cochez la case des CGU')
      }else{
        alert('TOUT EST BON')
      }
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30} enabled>
          <ScrollView style={{marginTop: 0}}>
            <View style={styles.logo_container}>
              <Image style={{width: 250, height: 80}} resizeMode="contain" source={{uri: 'https://upload.wikimedia.org/wikipedia/fr/d/de/Logo_Paris_Descartes.png'}}/>
              <Text style={styles.logo_text}>Events</Text>
            </View>

            <View style={styles.input}>
              <TextInput
                onChangeText={(text) => {this.nom = text}} 
                style={styles.textInput}
                placeholder={'Nom'}
                placeholderTextColor="lightgray"
                />
              <TextInput
                onChangeText={(text) => {this.prenom = text}}
                style={styles.textInput}
                placeholder={'Prénom'}
                placeholderTextColor="lightgray"
              />
              <TextInput
                onChangeText={(text) => {this.mail1 = text}}
                style={styles.textInput}
                placeholder={'Adresse mail'}
                placeholderTextColor="lightgray"
                keyboardType = 'email-address'
              />
              <TextInput
                onChangeText={(text) => {this.mail2 = text}}
                style={styles.textInput}
                placeholder={'Vérification adresse mail'}
                placeholderTextColor="lightgray"
                keyboardType = 'email-address'
              />
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginHorizontal: 19}}>
                <TouchableOpacity style={(this.state.checked==true)?styles.checkedBox:styles.uncheckedBox} activeOpacity={0.75} onPress={() => {this.setState({checked: !this.state.checked})}}>
                  <Image style={{width: 15, marginHorizontal:15, marginVertical:15}} source={require('../Image/checklogo.png')} resizeMode='contain'/>
                </TouchableOpacity>
                <Text style={{color: 'white', fontSize: 13, flexWrap: 'wrap', marginRight: 35, marginLeft: 10}}>Cochez la case si vous avez lu et accepté le réglement</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => this._validation()}>
                <Text style={styles.button_text}>Terminé</Text>
              </TouchableOpacity>
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
      marginRight: 20,
      marginBottom: 20
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
  },
  headerText: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
    marginTop: 15,
    fontWeight: 'bold'
  }
})
  
export default LoginEvent