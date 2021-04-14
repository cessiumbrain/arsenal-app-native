import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet, Image, TextInput, Pressable, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { connect } from 'react-redux';


class Login extends Component {
    constructor(props){
        super(props),
        this.state = {
            usernameInputValue: '',
            passwordInputValue:'',
        }
    }

    static navigationOptions = {
        title: 'Login'
    }

    render(){
        
        return(
            <ImageBackground
                source={require('./0572.jpg')}
                style={styles.imageBackground}
                >
                    <Image
                        source={require('./NYE.png')}
                        style={styles.logo}>

                    </Image>
                    <TextInput
                    style={{height: 40}, {width: 150}}
                    placeholder="User Name"
                    backgroundColor="rgba(255, 226, 0, 0.5)"
                    onChangeText={(text)=>{
                        this.setState({usernameInputValue: text})
                        
                    }}
                    >

                    </TextInput>
                    <TextInput
                    style={{height: 40}, {width: 150}}
                    placeholder="Password"
                    secureTextEntry={true}
                    backgroundColor="rgba(255, 226, 0, 0.5)"
                    onChangeText={(text)=>this.setState({passwordInputValue: text})}
                    >

                    </TextInput>
                    
                    <Button
                        title="LOGIN"
                        size={30}
                        buttonStyle={{margin: 10}}
                        
                        onPress={()=> {
                            
                            this.props.dispatch({type: 'LOGIN', payload: {
                                usernameInputValue: this.state.usernameInputValue,
                                passwordInputValue: this.state.passwordInputValue
                            }
                            });
                            if(this.props.currentUser){
                               this.props.navigation.navigate('Home') 
                            }
                            
                            }}>

                    </Button>
                    
                    <Pressable onPress={()=>this.props.navigation.navigate('SignUp')}
                    hitSlop={10}>
                        <Text>Sign Up</Text>    
                    </Pressable>
                    
                    

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

    logo: {
        height: 300,
        width: 300,
        paddingBottom: 20,
        marginBottom: 30
    }
})

const mapStateToProps = state => {
    return {
       users: state.users.userList,
       currentUser: state.users.currentUser
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps)(Login);