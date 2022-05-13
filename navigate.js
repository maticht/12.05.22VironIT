import React from 'react'
import AppUp from './AppUp'
import AppIn from './AppIn'
import UserPage from './userPage'

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();
export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='AppUp'
                component={AppUp}
                options={{title: 'SignUp'}}
            />
            <Stack.Screen
                name='AppIn'
                component={AppIn}
                options={{title: 'SignIn'}}
            />
            <Stack.Screen
                name='UserPage'
                component={UserPage}
                options={{title: 'User Page'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}
