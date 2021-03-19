import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import Login from './LoginComponent';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './HomeComponent';
import Dashboard from './DashboardComponent';
import Calendar from './CalendarComponent'
import {connect, Provider} from 'react-redux';


const DirectoryNavigator = createStackNavigator(
    {
        Login: { screen: Login },
        Home: {screen: Home}
    }, 
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const DrawerNavigator = createDrawerNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
    Dashboard: { screen: Dashboard },
    Calendar: { screen: Calendar }
},
{
    drawerBackgroundColor: '#fcdb03'
})

const AppNavigator = createAppContainer(DrawerNavigator);

class Main extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(

                <View style={{
                flex: 1,
                height: "100%",
                width: "100%",
                backgroundColor: "blue",
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>

                <AppNavigator />
            </View>


            
        );
            
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'

    }
})




export default Main