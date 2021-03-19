import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Image, View, Text} from 'react-native';
import {Card} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'


class Calendar extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            
                
                    
                    
                      <ImageBackground
                source={require('./0572.jpg')}
                style={styles.imageBackground}
                >
              
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
    card: {
        width: '90%'
    },
    cardImage: {
        resizeMode:'center'
    }
})

export default Calendar