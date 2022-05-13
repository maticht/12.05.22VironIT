import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity,Switch} from "react-native";
import { Checkbox } from 'react-native-paper';

export const Users = ({user, onRemove}) => {
    const hidePas = '*'.repeat(user.title.length)

    const [checked, setChecked] = React.useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [modText, setModText] = useState(hidePas)
    const [showHide, setShowHide] = useState('show')

    const toggleSwitch = () => {setIsEnabled(previousState => !previousState);
        if(isEnabled){
            setModText(hidePas)
            setShowHide('show')
        }else{
            setModText(user.title)
            setShowHide('hide')
        }
    };
    return(
        <TouchableOpacity>
            <View style = {styles.userBlock}>
                <View style = {styles.userBox}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        setTimeout(() => onRemove(user.id), 1000);
                        }}
                    />
                    <View>
                        <Text style = {styles.text}>{`Email:  ${user.mail}`}</Text>
                        <Text style = {styles.text}>{`Password:  ${modText}`}</Text>
                    </View>
                    <View style = {styles.showHide}>
                        <Text>{showHide}</Text>
                        <Switch
                            trackColor={{ false: "#9A9A9A", true: "#666" }}
                            thumbColor={isEnabled ? "#000" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    showHide:{
        flex:1,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'flex-end'
    },
    userBox:{
        flex:1,
        alignItems:'center',
        flexDirection:"row",

    },
    userBlock: {
        flex:1,
        alignItems:'center',
        flexDirection:"row",
        marginHorizontal:20,
        padding:10,
        borderColor:'#A9A9A9',
        borderWidth:1,
        borderRadius:5,
        marginBottom:5
    },
    text :{
        marginVertical:2,
        marginLeft:8
    }
})