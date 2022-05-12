import React, {useState} from "react";
import {  StyleSheet,Switch, View, ScrollView, Modal, Button, Text } from 'react-native';
import {Navbar} from './src/navbar'
import {SignUp} from "./src/signUp";
import {Users} from "./src/users";

export default function App() {
    const [user, setUser] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [modText, setModText] = useState('lite mode')
    const AddUser = (title) => {
        const NewUser ={
            id: Date.now().toString(),
            title: title
        }
        setUser((allUser) => [...allUser,NewUser])
    }
    const removeUser = id => {
        setUser(NewUser => NewUser.filter(user => user.id !== id))
    }
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        (isEnabled) ? setModText('lite mode') : setModText('dark mode')

    };

  return (
    <View >
        <Navbar title="Registration" />

        <View style={styles.switchBtn}>
            <Text>{modText}</Text>
        <Switch
            trackColor={{ false: "#9A9A9A", true: "#666" }}
            thumbColor={isEnabled ? "#000" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        </View>
        <View style={styles.container}>
            <SignUp onSubmit={AddUser}/>
        </View>
        <Button color='black' title="Show Users" onPress={() => setModalVisible(true)}/>
        <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {setModalVisible(!modalVisible)}}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ScrollView>
                        {user.map(user => (
                            <Users user={user} key={user.id} onRemove={removeUser}
                        />))}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.hideBtn}>
                <Button color='black' title="Hide User" onPress={() => setModalVisible(!modalVisible)}/>
            </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    hideBtn: {
      marginTop:20,

    },
  container: {
      paddingHorizontal:5
  },
    switchBtn: {
        marginTop:8,
        marginLeft:165,
        marginRight:10,
        flexDirection:'row',
        justifyContent: "space-between",
       alignItems:'center'
    },
    centeredView: {
        justifyContent: "center",
    },
    modalView: {
      marginTop:255,
        backgroundColor: "white",
    }
});
