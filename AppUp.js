import React, {useState} from "react";
import {  StyleSheet, View, ScrollView, Modal, Button} from 'react-native';
import {Navbar} from './src/navbar'
import {SignUp} from "./src/signUp";
import {Users} from "./src/users";

export default function App0({navigation}) {
    const [users, setUsers] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const AddUser = (title, mail) => {
        const NewUser ={
            id: Date.now().toString(),
            mail: mail,
            title: title,
        }
        setUsers((allUser) => [...allUser,NewUser])
    }
    const removeUser = id => {
        setUsers(NewUser => NewUser.filter(user => user.id !== id))
    }
    const loadNextPage = () => {
        navigation.navigate('AppIn')
    }

    return (
        <View>
            <Navbar title = 'Registration' />
            <View style={styles.container}>
                <SignUp onSubmit={AddUser}/>
            </View>
            <Button title='Sign In' onPress ={loadNextPage}></Button>
            <Button color='black' title="Show Users" onPress={() => setModalVisible(true)}/>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible)}}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ScrollView>
                            {users.map(user => (
                                <Users user={user} key={user.id} onRemove={removeUser}/>
                            ))}
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
        marginTop:15,
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
        marginTop:333,
    }
});