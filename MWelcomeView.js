import React, {Component} from 'react';
import {Text,Animated,Easing,Navigator,Dimensions, TouchableHighlight,Button,View,StyleSheet,TouchableOpacity,Image , ScrollView} from 'react-native';
import MInscription from './MInscription'
import MConnexion from './MConnexion'



class MWelcomeView extends React.Component {
  constructor(props){
    super(props)
    this.animatedValue= new Animated.Value(0)
  }
  componentDidMount () {
  this.animate()
}
  animate(){
    //this.animatedValue.setValue(0)pour faire tourner en boucle
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(()=>this.animate())
  }
    render(){
      const opacity = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      })
      return (
        <View style={{backgroundColor:'white', flex: 1}}>
        <Animated.View
          style={{
            opacity,
            backgroundColor: 'white'}} >
          <View style={{alignItems:'center', marginTop:50, marginBottom: 50}}>
            <Image style={{width: 250, height: 80}} resizeMode="contain" source={{uri: 'https://upload.wikimedia.org/wikipedia/fr/d/de/Logo_Paris_Descartes.png'}}/>
          </View>
          </Animated.View>
          <ScrollView
            horizontal={true}
            pagingEnabled
          >
          <Image
            style={{marginLeft: 25,height: 200, width: 300, marginRight:25}}
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb65Bn2O6AJqJUBxAI8XfSO1I7U49JeKVjStibuFWny1kEQbJq&s'}}
          />
          <Image
            style={{marginLeft: 60,height: 200, width: 300, marginRight:25}}
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnp8XjpHU3Q-gopU8T6HVwjbp_cYPRUQnX3_fWVC2a1rJByJ2F&s'}}
          />
          <Image
            style={{marginLeft: 25,height: 200, width: 300, marginRight:25}}
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILscFy42lvjLD3Hm4fmoo3KjAoXWphZQGlmn5bCJyaf3LQDp0&s'}}
          />
          </ScrollView>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.props.navigation.navigate('Inscription')}
          >
            <Text style={styles.button_text1}>S'inscrire</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => this.props.navigation.navigate('Connexion')}
          >
            <Text style={styles.button_text2}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      );
    }
}


const styles =StyleSheet.create({
  bienvenue :{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50
  },
  button1: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#cc0033',
      marginTop: 20,
      borderRadius: 25,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 1
  },
  button_text1: {
      fontSize: 20,
      color: 'white'
  },
  button2: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#E1E1E1',
      marginTop: 20,
      borderRadius: 25,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20
  },
  button_text2: {
      fontSize: 20,
      color: 'black'
  },
  bloc: {
    borderRadius: 25,
    borderColor: '#cc0033',
    borderWidth: 10,
    backgroundColor: 'white',
    color: 'blue',
    marginHorizontal: 25,
    marginBottom: 10,
    padding: 80,
    alignSelf: 'center'

  }
});

export default MWelcomeView
