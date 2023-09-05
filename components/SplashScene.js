import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
  
export default class SplashScene extends Component {

    render() {
    	return(
	    	<View style={styles.container}>
	            <Text>Is IOS!</Text>
	        </View>
	    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F0',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
    },
});