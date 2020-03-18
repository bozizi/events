import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, TouchableOpacity, Image, CheckBox, ScrollView, KeyboardAvoidingView, Modal, TouchableHighlight, Picker} from 'react-native'

class Formulaire extends React.Component {
  
    constructor(props){
        super(props)
        this.state = {
            checked: true,
            niveauModal: false,
            domaineModal: false
        }
        this.checkBoxStyle = styles.uncheckedBox
        this.niveau = null
        this.domaine = null
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
            <Modal animationType='none' transparent={true} visible={this.state.niveauModal}>
                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <View style={{backgroundColor:'#EEEEEE'}}>
                        <TouchableOpacity style={styles.buttonModal} onPress={() => {this.niveau = 'L1'; this.setState({niveauModal: false})}}>
                            <Text style={{color:'white', fontWeight:'bold', alignSelf:'center', fontSize:25}}>L1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonModal} onPress={() => {this.niveau = 'L2'; this.setState({niveauModal: false})}}>
                            <Text style={{color:'white', fontWeight:'bold', alignSelf:'center', fontSize:25}}>L2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonModal} onPress={() => {this.niveau = 'L3'; this.setState({niveauModal: false})}}>
                            <Text style={{color:'white', fontWeight:'bold', alignSelf:'center', fontSize:25}}>L3</Text>
                        </TouchableOpacity>
                        <View style={{height: 20}}/>
                    </View>
                </View>
            </Modal>

            <Modal animationType='none' transparent={true} visible={this.state.domaineModal}>
                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <View style={{backgroundColor:'#EEEEEE'}}>
                        <TouchableOpacity style={styles.buttonModal} onPress={() => {this.domaine = 'Mathématique'; this.setState({domaineModal: false})}}>
                            <Text style={{color:'white', fontWeight:'bold', alignSelf:'center', fontSize:25}}>Mathématique</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonModal} onPress={() => {this.domaine = 'Informatique'; this.setState({domaineModal: false})}}>
                            <Text style={{color:'white', fontWeight:'bold', alignSelf:'center', fontSize:25}}>Informatique</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonModal} onPress={() => {this.domaine = 'Double-Licence'; this.setState({domaineModal: false})}}>
                            <Text style={{color:'white', fontWeight:'bold', alignSelf:'center', fontSize:25}}>Double-Licence</Text>
                        </TouchableOpacity>
                        <View style={{height: 20}}/>
                    </View>
                </View>
            </Modal>

            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30} enabled>
                <ScrollView style={{marginTop: 24}} keyboardShouldPersistTaps='always'>
                    <View style={styles.logo_container}>
                        <Image style={{width: 250, height: 80}} resizeMode="contain" source={{uri: 'https://upload.wikimedia.org/wikipedia/fr/d/de/Logo_Paris_Descartes.png'}}/>
                        <Text style={styles.logo_text}>Events</Text>
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>Formulaire à remplir</Text>
                        <TouchableOpacity style={styles.buttonModal} activeOpacity={1} onPress={() => {this.setState({niveauModal: true})}}>
                            <Text style={{color: 'white', fontSize: 15}}>{(this.niveau==null) ? 'Niveau d\'étude' : this.niveau}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonModal} activeOpacity={1} onPress={() => {this.setState({domaineModal: true})}}>
                            <Text style={{color: 'white', fontSize: 15}}>{(this.domaine==null) ? 'Domaine d\'étude' : this.domaine}</Text>
                        </TouchableOpacity>
                        <TextInput
                            onChangeText={(text) => {this.mail = text}} 
                            style={styles.textInput}
                            placeholder={'Mot de passe'}
                            placeholderTextColor="white"
                            secureTextEntry={this.state.checked}
                        />
                        <TextInput
                            onChangeText={(text) => {this.mdp = text}}
                            style={styles.textInput}
                            placeholder={'Vérifiez le mot de passe'}
                            placeholderTextColor="white"
                            secureTextEntry={this.state.checked}
                            keyboardType='default'
                        />
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginHorizontal: 19}}>
                        <TouchableOpacity style={this.checkBoxStyle} onPress={() => this._checkbox()}/>
                        <Text style={{color: 'white', fontSize: 13, flexWrap: 'wrap', marginRight: 35, marginLeft: 10}}>Afficher le mot de passe</Text>
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
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: '#980026',
        borderRadius: 25,
        paddingLeft: 10,
        height: 40,
        color: 'white'
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
        padding: 7
    },
    checkedBox: {
        backgroundColor: '#980026',
        borderWidth: 4,
        borderColor: '#980026',
        borderRadius: 5,
        padding: 7
    },
    buttonModal: {
        backgroundColor: '#980026',
        borderRadius: 25,
        height: 40,
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 20
    }
})
  
export default Formulaire