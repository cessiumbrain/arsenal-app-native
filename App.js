import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';
import Login from './components/LoginComponent';
import Home from './components/HomeComponent';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'

//CURRENT SPECIAL
const currentSpecial = (state ={
        specialType: 'Half Off Cover',
        startTime: null,
        endTime: null
}, action)=> {
  switch(action.type){
    case 'SET_SPECIAL':
      return state= {
        ...state, 
        specialType: action.payload.specialType,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime

      };
      case 'CLEAR_SPECIAL': return state={
        specialType: null,
        startTime: null,
        endTime: null
      }
    default: return state
  }
}

const currentUser = (state={
    username: 'AJ',
    password: '123',
    loggedIn: false,
    waitList: false
  
}, action) => {
  switch(action.type){
    
    default: return state;
  }
}

const users = (state=[
  {
    username: 'AJ',
    password: '123',
    loggedIn: false,
    waitList: false,
    id: 1
  },
  {
    username: "Joe",
    password: "password",
    loggedIn: false,
    waitList: false,
    id: 2
  }
], action)=> {
  switch(action.type){
    case 'LOGIN':
      //copy users array
      const usersArray = state
      //search users array for a user with username === to action.payload.usernameInputValue
      const userObject = state.filter(user=> user.username === action.payload.usernameInputValue)[0];
      //if the username exists...
      if (userObject){
        //find the userIndex of current user
      const findUserIndex = () => {
        for(let i=0; i<state.length; i++) {
        if (state[i].username === action.payload.usernameInputValue) {
          return i
        }
      }
    }
      const currentUserIndex = findUserIndex()
      if (userObject.password === action.payload.passwordInputValue) {
       //if so, change loggedIn of userobject to true
      userObject.loggedIn = true
      //remove initial userobject from copy of state
      usersArray.splice(currentUserIndex, 1);
      //add newUserObject to usersArray
      usersArray.push(userObject)
     }
      }
      

      //check if userobject.username and username.password are equal
     

     return usersArray;

    default: return state
  }
}

//Wait List
const WaitList = (state = [], action)=> {
  switch(action.type){
    default: return state
  }
}


const rootReducer = combineReducers({users, currentUser, currentSpecial, WaitList})
const store = createStore(rootReducer)

export default function App() {

  return (
    
<Provider store={store}>
  
  <Main/>
</Provider>
      

    

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
