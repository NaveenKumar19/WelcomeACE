//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView,ScrollView} from 'react-native';
import Login from './Login.js';
import Dimensions from 'Dimensions';

// create a component
class Welcome extends Component {
    render() {
        return (

                <View style={styles.container}>

                <Login/>

               </View>


        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width:DEVICE_WIDTH,
        height:DEVICE_HEIGHT,
    },


});

// define your styles

//make this component available to the app
export default Welcome;
