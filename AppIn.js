import React from "react";
import {  StyleSheet, View, Button} from 'react-native';
import {Navbar} from './src/navbar'
import {SignUp} from "./src/signUp";
import UserPage from "./userPage";

export default function AppIn({navigation}) {
    const AddUser = (title) => {
    }
    const loadUserPage = () => {
        navigation.navigate('UserPage')
    }
    return (
        <View >
            <Navbar title="Authorization" />
            <View style={styles.container}>
                <SignUp onSubmit={AddUser}/>
            </View>
            <Button title='Show User Page' onPress ={loadUserPage}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        paddingHorizontal:5
    }
});
