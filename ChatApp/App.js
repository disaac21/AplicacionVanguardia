import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                {/* <Stack.Screen name="WelcomeScreen" component={ WelcomeScreen }/> */}
                {/* <Stack.Screen name="Login" component={ LoginScreen }/> */}
                {/* <Stack.Screen name="Login" component={ LoginScreen }/> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;