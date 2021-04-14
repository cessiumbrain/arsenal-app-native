import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import Login from './LoginComponent';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './HomeComponent';
import Dashboard from './DashboardComponent';
import Calendar from './CalendarComponent'
import {connect} from 'react-redux';
import WaitList from './WaitList';
import Schedule from './ScheduleComponent';
import Contact from './ContactComponent';
import {store} from '../App';
import SignUp from './SignUpComponent';
import * as Haptics from 'expo-haptics';

const DirectoryNavigator = createStackNavigator(
    {
        Login: {screen: Login},
        Home: {screen: Home}
    }
)





class Main extends Component {
    constructor(props){
        super(props)
    }

    
    
    render(){
        
        let DrawerObj = {}

        if (this.props.currentUser.admin) {
            DrawerObj = 
            {
            Login: { screen: Login },
            Home: { screen: Home },
            Dashboard: { screen: Dashboard },
            Schedule: { screen: Schedule },
            WaitList: { screen: WaitList },
            SignUp: { screen: SignUp}

            }
        } else {
            DrawerObj = {
                Login: { screen: Login },
                Home: { screen: Home },
                Schedule: { screen: Schedule },
                SignUp: { screen: SignUp}
            }
        }
            

        const DrawerNavigator = 
createDrawerNavigator(
    {
     ...DrawerObj

},
{
    drawerBackgroundColor: '#fcdb03'
})

const AppNavigator = createAppContainer(DrawerNavigator)

        if(this.props.currentUser.waitList) {
            Haptics.selectionAsync()
        }
        return(
                <View 
                style={{
                flex: 1,
                height: "100%",
                width: "100%",

                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
            <AppNavigator/>
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

const mapStateToProps = state => {
    return {
        currentUser: state.users.currentUser
    }
}





export default connect(mapStateToProps)(Main)