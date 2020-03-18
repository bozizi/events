import React, {Component} from 'react';
import {Text, Navigator, TouchableHighlight, Button,View,ScrollView,Image, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet} from 'react-native';
import MInscription from './MInscription.js'
import MNewPassword from './MNewPassword.js'

class MConnexion extends React.Component {
  constructor(props){
    super(props);
    this.state={
      mail: '',
      password: '',
      checked: false,
      hidden: true
    }
  }
    validation(){
      if(this.state.mail==''||this.state.password=='')
        alert('Pour se connecter il faut sans doute remplir les champs')
      else
        alert('Vive les évènements !')
    }
  render(){
    return (
      <View style={{backgroundColor:'white', flex: 1}}>
        <KeyboardAvoidingView behavior="position" enabled>
          <ScrollView>
            <Text style={styles.titre}>Se connecter</Text>
            <Text style={{marginLeft: 20, fontSize: 15}}>E-mail</Text>
            <TextInput
              clearButtonMode={'while-editing'}
              style={styles.mail}
              placeholder={'ii00000@etu.parisdescartes.fr'}
              placeholderTextColor={'#E1E1E1'}
              onChangeText={(mail)=>this.setState({mail})}
              value={this.state.mail}
              keyboardType = 'email-address'
            />
            <Text style={{marginLeft: 20, fontSize: 15, marginTop: 25}}>Mot de passe</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                clearButtonMode={'while-editing'}
                style={styles.mail}
                placeholder={'your secret password'}
                placeholderTextColor={'#E1E1E1'}
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
                secureTextEntry= {!this.state.checked}
              />
              <TouchableOpacity
                onPress={ () => this.setState({ hidden: !this.state.hidden })}
              >
                <Image
                  style={{marginLeft:10, marginRight:10, width:30 ,height:30}}
                  source={{uri:'https://i.ya-webdesign.com/images/png-eye-5.png'}}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>this.validation()}
            >
              <Text style={styles.button_text}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignSelf:'center',marginTop: 25}}
              onPress={() => this.props.navigation.navigate('mdp perdu')}
            >
              <Text style={styles.button_mdp}>Mot de passe oublié</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignSelf:'center',marginTop: 25}}
              onPress={() => this.props.navigation.navigate('Inscription')}
            >
              <Text style={styles.button_mdp}>Créer un compte</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}


const styles =StyleSheet.create({
  titre :{
    fontSize: 20,
    color:'black',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 50
  },
  mail :{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    width: 300
  },
  button: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#cc0033',
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
  button_mdp :{
    fontSize: 15,
    color: 'blue'
  }
});


export default MConnexion