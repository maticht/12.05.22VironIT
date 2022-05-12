import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Checkbox } from 'react-native-paper';




export const Users = ({user, onRemove}) => {
    const [checked, setChecked] = React.useState(false);
    return(
        <TouchableOpacity>
        <View style = {styles.userBlock}>

            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                    setTimeout(() => onRemove(user.id), 1000);
                }}
            />

            <Text style = {styles.text}>{`Mail:  ${user.title}`}</Text>
        </View>
</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    userBlock: {
        flex:1,
        alignItems:'center',
        flexDirection:"row",
        marginHorizontal:20,
        padding:10,
        borderColor:'#eee',
        borderWidth:1,
        borderRadius:5,
        marginBottom:5
    },
    text :{

    }
})