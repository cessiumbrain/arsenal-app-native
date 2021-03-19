import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet, Image, TextInput} from 'react-native';
import {Button} from 'react-native-elements';


class Login extends Component {
    constructor(props){
        super(props)
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
                    >

                    </TextInput>
                    <TextInput
                    style={{height: 40}, {width: 150}}
                    placeholder="Password"
                    secureTextEntry={true}
                    backgroundColor="rgba(255, 226, 0, 0.5)"
                    >

                    </TextInput>
                    
                    <Button
                        title="LOGIN"
                        size={30}
                        style={{margin: 20}}
                        onPress={()=> console.log('1232')}>

                    </Button>
                    

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

export default Login;