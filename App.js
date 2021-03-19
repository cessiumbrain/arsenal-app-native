import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';
import Login from './components/LoginComponent';
import Home from './components/HomeComponent';
import {Provider} from 'react-redux';
import {createStore} from 'redux'



const users = (state=[
  {
    username: "Joe",
    password: "password"
  }
], action)=> {
  switch(action.type){
    default: return state
  }
}

const store = createStore(users)

export default function App() {
  useEffect(() => {
    console.warn("store",store)
  });
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
