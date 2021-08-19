import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import {FirstPage, AboutApp, CalculateBMI, BMIDetails} from './MyAppScreens'

const Stack = createStackNavigator()

export default ()=>(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="First Page" component={FirstPage} options={{title: ' '}}/>
            <Stack.Screen name="About App" component={AboutApp}/>
            <Stack.Screen name="BMI Calculation" component={CalculateBMI}/>
            <Stack.Screen name="BMI Details" component={BMIDetails}/>
        </Stack.Navigator> 
    </NavigationContainer>
)
