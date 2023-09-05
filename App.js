import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';

import  SplashScene  from './components/SplashScene';


export default class App extends Component {
    constructor(props){
        super(props);
    }

    state = {
        scene:"splash",
    }

    handleButtonClickLogout(e){
        console.log("pressed button OK");
        this.setState({scene:"none"});
    }

    render(){
       return (
            <View style={styles.container}>
                <Text>ANDA!</Text>
                <button onClick={this.handleButtonClickLogout.bind(this)}> Logout</button>
                { this.state.scene=="splash" ? <SplashScene /> : null }
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
