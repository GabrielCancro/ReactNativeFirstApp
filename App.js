import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';

import  TestComponent  from './components/TestComponent';
import  SplashScene  from './components/SplashScene';

export default class App extends Component {
    state = {
        scene:"splash",
    }
    handleButtonClickLogout(e){
        console.log("pressed button OK");
    }
    render(){
       return (
            <View style={styles.container}>
                <Text>ANDA!</Text>
                <button onClick={this.handleButtonClickLogout}> Logout</button>
                <SplashScene />
            </View> 
        ); 
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00F',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
