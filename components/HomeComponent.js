import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Button, FlatList} from 'react-native';
import {Icon, ListItem, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import * as Notifications from 'expo-notifications';


class Home extends Component {

  

    render(){

        return(
            <ImageBackground
                source={require('./0572.jpg')}
                style={styles.imageBackground}
                >
                    <View style={{backgroundColor: 'white', alignItems: 'center', padding: 10}}>
                        <Text>{this.props.currentUser.username}</Text>
                    

                    <Card>
                        <Icon
                        reverse
                        name='fa-search-dollar'

                        type='ionicon'
                        color={this.props.specialType ? '#00ff38' : '#EF5350'}>

                       </Icon>
                       <ListItem.Title>Active Special: {this.props.specialType}</ListItem.Title>
                       <ListItem.Subtitle>From: {this.props.startTime} To: {this.props.endTime}</ListItem.Subtitle>

                    </Card>
                       
                       

                    <Card>
                     <ListItem>
                       <Icon
                        reverse
                        name='fa-search-dollar'

                        type='ionicon'
                        color={this.props.currentUser.waitList ? '#00ff38' : '#EF5350'}>

                       </Icon>
                       <ListItem.Title>Wait List: {this.props.currentUser.waitList ? 'Ready' : 'Not Ready'}</ListItem.Title>
                       
                   </ListItem>   
                    </Card>
                   
               </View>

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
        startTime: state.currentSpecial.startTime,
        endTime: state.currentSpecial.endTime,
        currentUser: state.users.currentUser
    }
}

export default connect(mapStateToProps)(Home)