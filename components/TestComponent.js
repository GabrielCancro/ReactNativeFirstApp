import React, { Component } from 'react';
 
import {
  View,
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