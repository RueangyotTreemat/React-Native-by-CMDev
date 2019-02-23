/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';



export default class workshop18 extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <View style={{padding: 10,flex : 1, flexDirection: 'column',justifyContent : 'center'}}>
        <FlatList style={{marginTop : 50}} data={[1,2,3,4,5,6,7]} 
        renderItem={({item}) => <Text>{item}</Text> }/>
      </View>
    );
  }

}