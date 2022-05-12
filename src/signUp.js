import React,{useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";

export const SignUp = ({onSubmit}) => {
    const[value, setValue] = useState('')
    // const[pasValue, setPasValue] = useState('')
    const press = () => {
        if(value.trim()){
            onSubmit(value)
            setValue('')
            // onSubmit(pasValue)
            // setPasValue('')
        }else{
            Alert.alert('Enter login or password')
        }
    }
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Enter your email'
            />
            {/*<TextInput*/}
            {/*    style={styles.input}*/}
            {/*    onChangeText={setPasValue}*/}
            {/*    value={pasValue}*/}
            {/*    placeholder='Enter your password'*/}
            {/*/>*/}
            <Button color='black' title="SignUp" onPress={press}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        marginTop: 0,
        paddingBottom: 20,
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        padding:5,
        height: 34,
        width: '70%',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'white'
    },
})