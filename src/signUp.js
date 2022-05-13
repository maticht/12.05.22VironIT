import React,{useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";

export const SignUp = ({onSubmit}) => {
    const[value, setValue] = useState('')
    const[eValue, setEValue] = useState('')
    const press = () => {
        if(value.trim() && eValue.trim()){
            onSubmit(eValue, value)
            setEValue('')
            setValue('')

        }else if(!value.trim()){
            Alert.alert('Enter email')
        }else{
            Alert.alert('Enter password')
        }
    }
    return (
        <View style={styles.block}>
            <View style={styles.inputBlock}>
                <TextInput
                    style={styles.input}
                    onChangeText={setValue}
                    value={value}
                    placeholder='Enter your mail'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEValue}
                    value={eValue}
                    placeholder='Enter your password'
                />
            </View>
            <Button color='black' title="Enter" onPress={press}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputBlock: {
        flexDirection: "column"
    },
    block: {
        marginTop: 5,
        marginHorizontal:10,
        marginVertical:17,
        paddingBottom: 20,
        height: 70,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent:"space-between"
    },
    input: {
        padding:5,
        height: 34,
        marginTop: -1,
        width: '203%',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'white'
    },
})