import React, {Component} from 'react';
import { StyleSheet, View, TextInput,Navigator, Button, FlatList, Text, TouchableOpacity, Image, CheckBox, Picker, ScrollView, KeyboardAvoidingView} from 'react-native'



class MInscription extends React.Component {
  constructor(props){
    super(props);
    this.state={
      checked: false,
      nom: '',
      prenom:'',
      mail1:'',
      mail2:'',
      mail:''
    }
    this.checkBoxStyle = styles.uncheckedBox
  }
  _checkbox() {
       if(this.state.checked==true) {
           this.setState({checked: false})
           this.checkBoxStyle = styles.checkedBox
           console.log('checked')
       }else{
           this.setState({checked: true})
           this.checkBoxStyle = styles.uncheckedBox
           console.log('unchecked')
       }
   }
  validation(){
    if ((this.state.nom=='')||(this.state.prenom=='')||(this.state.formation=='')||(this.state.mail1=='')||(this.state.mail2=='')||(this.state.choosenIndex==0)){
      alert('Champ(s) non rempli(s) ')
    }
    else {
      if(!this.state.mail1.endsWith('@etu.parisdescartes.fr')){
        alert('Ce mail ne correspond pas à un adresse mail de l\' Université de Paris Descartes')
      }else{
        if(this.state.mail1!=this.state.mail2)
          alert('Les adresses mail sont différentes')
        else{
          this.state.mail=this.state.mail1+'@etu.parisdescartes.fr'
          alert(`Un mail avec le mot de passe a été envoyé a cette adresse : ${this.state.mail} `)
        }
      }
    }
  }
    render(){
      return(
        <View style={styles.container}>
          <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={30}
          enabled>
              <View style={styles.formulaire}>
                <Text style={styles.titre}>Inscription</Text>

                <Text style={styles.petitTitre}>Nom</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Nom'}
                  placeholderTextColor={'#E1E1E1'}
                  onChangeText={(nom)=>this.setState({nom})}
                  value={this.state.nom}
                />

                <Text style={styles.petitTitre}>Prénom</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Prenom'}
                  placeholderTextColor={'#E1E1E1'}
                  onChangeText={(prenom)=>this.setState({prenom})}
                  value={this.state.prenom}
                />

                <Text style={styles.petitTitre}>Adresse mail</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={'ton adresse mail'}
                  placeholderTextColor={'#E1E1E1'}
                  onChangeText={(mail1)=>this.setState({mail1})}
                  value={this.state.mail1}
                  keyboardType = 'email-address'
                />
                <Text style={styles.petitTitre}>Vérification adresse mail</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={'encore ton adresse mail'}
                  placeholderTextColor={'#E1E1E1'}
                  onChangeText={(mail2)=>this.setState({mail2})}
                  value={this.state.mail2}
                  keyboardType = 'email-address'
                />

                <TouchableOpacity style={styles.button} onPress={() => this.validation()}>
                      <Text style={styles.button_text}>Terminé</Text>
                 </TouchableOpacity>
              </View>

          </KeyboardAvoidingView>
        </View>
      )
    }
  }

const styles =StyleSheet.create({
    container: {
      alignItems:'center',
      flex:1,
      backgroundColor:'white'
    },
    logo_container: {
        marginTop: 15,
        alignItems: 'center'
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
        marginBottom: 10,
        flex:1
    },
    button: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#cc0033',
        marginTop: 20,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    button_text: {
        fontSize: 20,
        color: 'white'
    },
    uncheckedBox: {
        backgroundColor: '#cc0033',
        borderWidth: 4,
        borderColor: '#980026',
        borderRadius: 5,
        padding: 7
    },
    checkedBox: {
        backgroundColor: '#980026',
        borderWidth: 4,
        borderColor: '#980026',
        borderRadius: 5,
        padding: 7
    },
    titre: {
      marginLeft: 20,
      fontSize: 20,
      marginTop: 15,
      color:'black',
      fontWeight: 'bold',
      marginBottom: 25
    },
    formulaire: {
      borderRadius:25,
      borderColor:'#cc0033',
      marginTop:25,
      marginRight:5,
      marginLeft:5,
      marginBottom:5,
      backgroundColor: 'white',
      borderWidth: 5
    },
    textInput: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 20,
      width: 275
    },
    petitTitre: {
      marginLeft: 20,
      fontSize: 15,
      marginTop:25,
      marginBottom: 15
    }
  })

export default MInscription