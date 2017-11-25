//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView,ScrollView} from 'react-native';
import LoginForm from './LoginForm';
import logoImg from '../image/newlogo.png';
import loginbg from '../image/loginbg.jpg'

// create a component
class Login extends Component {
    render() {
        return (

                <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={logoImg} />
                    </View>
               <View style={styles.formContainer}>
                   <LoginForm />
               </View>
               </View>


        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 3,
        justifyContent: 'center'
    },
    formContainer:{
        flexGrow: 1,
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 200
    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    }
});

//make this component available to the app
export default Login;
