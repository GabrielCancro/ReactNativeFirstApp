import React, { Component } from 'react';
 
import {
  View, Platform, StyleSheet, Text,
} from 'react-native';
  
export default class TestComponent extends Component {
 
    render() {
        if(Platform.OS === 'ios') {
          return(
            <View style={styles.container}>
              <Text>Is IOS!</Text>
            </View>
          )
        } else {
          return(
            <View style={styles.container}>
              <Text>Isn´t IOS!</Text>
            </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F',
        alignItems: 'center',
        justifyContent: 'center',
    },
});