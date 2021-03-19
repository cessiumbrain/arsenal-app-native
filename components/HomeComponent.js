import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Button, FlatList} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';


const ActiveSpecial = (props) => {
   if (props.ActiveSpecial) {
        return(
            <ListItem.Subtitle
            style={{color: "#09f919"}}>
            Active</ListItem.Subtitle>
        )
    } else {
        return(
            <ListItem.Subtitle>None Active</ListItem.Subtitle>
        )
    }
}

class Home extends Component {
    render(){
        return(
            <ImageBackground
                source={require('./0572.jpg')}
                style={styles.imageBackground}
                >
                    <Icon
                    reverse
                    name='trophy-outline'
                    type='ionicon'
                    color='#517fa4'
                    size={40}
                    />
                    <Icon
                    reverse
                    name='home'
                    type='font-awesome'
                    color='#517fa4'
                    size={40}
                    onPress={()=>   this.props.navigation.navigate('Login')}
                    />
                    <Icon
                    reverse
                    name='fa-calendar'
                    type='font-awesome'
                    color='#517fa4'
                    size={40}
                    onPress={()=>   this.props.navigation.navigate('Login')}
                    />

                   <ListItem
                   title="title"
                   subtitle="subtitle"
                   >
                       <ListItem.Title>Current Special</ListItem.Title>
                       
                       <ActiveSpecial/>
                       
                       
                   </ListItem>

                   <ListItem
                   title="title"
                   subtitle="subtitle"
                   >
                       <ListItem.Title>Wait List Status:</ListItem.Title>
                       
                       
                       
                       
                   </ListItem>
               

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
}
)

export default Home