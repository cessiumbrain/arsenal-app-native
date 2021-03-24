import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Button, FlatList} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import {connect} from 'react-redux';



class Home extends Component {
    render(){
        return(
            <ImageBackground
                source={require('./0572.jpg')}
                style={styles.imageBackground}
                >
                    
 
                    <Icon
                    reverse
                    name='home'
                    type='font-awesome'
                    color='#fcdb03'
                    size={40}
                    onPress={()=>   this.props.navigation.navigate('Login')}
                    />
                    <Icon
                    reverse
                    name='fa-calendar'
                    type='font-awesome'
                    color='#fcdb03'
                    size={40}
                    onPress={()=>   this.props.navigation.navigate('Login')}
                    />

                   <ListItem
                   >
                       <Icon
                        reverse
                        name='fa-search-dollar'

                        type='ionicon'
                        color={this.props.specialType ? '#00ff38' : '#EF5350'}>

                       </Icon>
                       <ListItem.Title>Active Special: {this.props.specialType}</ListItem.Title>
                       
                   </ListItem>

                   <ListItem>
                       <Icon
                        reverse
                        name='fa-search-dollar'

                        type='ionicon'
                        color={this.props.currentUser.waitList ? '#00ff38' : '#EF5350'}>

                       </Icon>
                       <ListItem.Title>Wait List: {this.props.currentUser.waitList ? 'Ready' : 'Not Ready'}</ListItem.Title>
                       
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

const mapStateToProps = state => {
    return {
        specialType: state.currentSpecial.specialType,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Home)