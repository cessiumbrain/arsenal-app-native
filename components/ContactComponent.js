import React, {Component} from 'react';
import {Text, View, Linking} from 'react-native';
import {Icon} from 'react-native-elements';

class Contact extends Component {
    render(){
        return(
          <View>
              <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                    reverseColor='blue'
                    underlayColor='blue'
                    
            />
            <Text>123</Text>
        </View>  
        )
        
    }
}

export default Contact