import { ImageBackground, StyleSheet, View, TextInput} from "react-native";
import {Button } from 'react-native-elements';
import React, { Component } from 'react';
import {connect} from 'react-redux';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            newUserUsername: '',
            newUserFirstName: '',
            newUserLastName: '',
            newUserPhoneNumb: '',
            newUserEmail: '',
            newUserPassword: ''
        }
    }

    render(){
        return(
            <ImageBackground 
            style={styles.imageBackground}
            source={require('./0572.jpg')}>
                <View
                style={{height: "auto", width: "90%", backgroundColor:"white"}}>
                    <TextInput
                    style={styles.inputBackground}
                    placeholder='First Name'
                    name="newUserFirstName"
                    onChangeText={(text)=> this.setState({newUserFirstName: text})}
                    ></TextInput>
                    <TextInput
                    style={styles.inputBackground}
                    placeholder='Last Name'
                    onChangeText={(text)=>this.setState({newUserLastName: text})}></TextInput>
                    <TextInput
                    style={styles.inputBackground}
                    placeholder='Password'
                    onChangeText={(text)=>this.setState({newUserPassword: text})}></TextInput>
                    <TextInput
                    style={styles.inputBackground}
                    placeholder='Username'
                    onChangeText={(text)=>this.setState({newUserUsername: text})}></TextInput>
                      
                </View>
                <Button
                style={{}}
                title="Sign Up"
                onPress={()=>{this.props.dispatch( {type: 'SIGN_UP', payload: this.state})
                this.props.navigation.navigate('Home')}
                                }></Button>
                <Button
                title="log state"
                onPress={()=>{
                    console.log(this.props.usersArray)
                    
                }}></Button>
                
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        flex: 1,
        alignItems: 'center',
    justifyContent: 'center'
    },
    inputBackground: {
        backgroundColor: 'white',
        padding: 20
    }
}
)

const mapStateToProps = (state)=> {
    return{
        usersArray: state.users
    }
}
export default connect(mapStateToProps)(SignUp)