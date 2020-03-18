import React, {Component} from 'react';
import {Text, Navigator, TouchableHighlight, Button,View,ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Image, Modal} from 'react-native';

export default class MNewPassword extends React.Component{
  constructor(props){
    super(props);
    this.state={
      hidden: true,
      hidden1: true,
      mdp1:'',
      mdp2:'',
      modalVisible:false
    }
  }

  validation(){
    if(this.state.mdp1==''||this.state.mdp2=='')
      alert('écris ton mot de passe sur un papier cette fois')
    else{
      if (this.state.mdp1==this.state.mdp2)
        alert('J\'espère que tu l\'as noté sinon tu vas encore me faire bosser')
      else
        alert('Il faut un mot de passe, pas deux !')
    }
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
    return(
      <View style={{backgroundColor:'white', flex:1}}>
        <Text style={styles.titre}>Mot de passe oublié </Text>
                <Text style={styles.petitTitre}>Mot de Passe</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput
                      style={styles.textInput}
                      placeholder={'Mot de Passe'}
                      placeholderTextColor={'#E1E1E1'}
                      secureTextEntry= {this.state.hidden}
                      onChangeText={(mdp1)=>this.setState({mdp1})}
                      value={this.state.mdp1}
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
                <Text style={styles.petitTitre}>Vérification de Mot de Passe</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={'Vérification de Mot de Passe'}
                    placeholderTextColor={'#E1E1E1'}
                    secureTextEntry= {this.state.hidden1}
                    onChangeText={(mdp2)=>this.setState({mdp2})}
                    value={this.state.mdp2}
                  />
                  <TouchableOpacity
                    onPress={ () => this.setState({ hidden1: !this.state.hidden1 })}
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
                <Text style={styles.button_text}>Terminé</Text>
              </TouchableOpacity>
              <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                  }}>
                    <View style={{marginTop: 50, marginLeft: 20}}>
                      <Text>Minimum 8 caractères</Text>

                    </View>
                    <TouchableOpacity
                      style={{fontSize:20, color:'blue'}}
                      onPress={()=>{this.setModalVisible(!this.state.modalVisible)}}
                    >
                      <Text style={styles.button}>Revenir au formulaire</Text>
                    </TouchableOpacity>
              </Modal>
              <Image
                style={{marginLeft:10, marginRight:10, width:50 ,height:50, alignSelf:'center', marginTop: 25}}
                source={{uri:'https://i.skyrock.net/1888/98201888/pics/3297173862_1_3_rWb2O1aM.png'}} />
                <TouchableOpacity

                  onPress={()=>{this.setModalVisible(!this.state.modalVisible);}}
                >
                  <Text style={{fontSize: 15, alignSelf:'center', marginTop:20 }}> Comment faire un bon mot de passe</Text>
                </TouchableOpacity>


        </View>
    );
  }
}

const styles=StyleSheet.create({
  petitTitre: {
    marginLeft: 20,
    fontSize: 15,
    marginTop:25,
    marginBottom: 15
  },
  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    width: 275
  },
  button: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#cc0033',
      marginTop: 50,
      borderRadius: 25,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20
  },
  button_text: {
      fontSize: 20,
      color: 'white'
  },
  titre: {
    marginLeft: 20,
    fontSize: 20,
    marginTop: 15,
    color:'black',
    fontWeight: 'bold',
    marginBottom: 25
  }
});