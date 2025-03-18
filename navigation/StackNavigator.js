import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import ProductInfoScreen from '../screens/ProductInfoScreen';
import AddAddressScreen from '../screens/AddAdressScreen';
import AddressScreen from '../screens/AdressScreen';
import OrderScreen from '../screens/OrderScreen';
import ElectrictionScreen from '../screens/ElectrictionScreen';
import JeweleryScreen from '../screens/JeweleryScreen';
import WomenCloSreen from '../screens/WomenCloSreen';
import MenCloScreen from '../screens/MenCloScreen';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarLabelStyle: { color: "#008E97" },
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused ? <Entypo name="home" size={24} color="black" /> : <AntDesign name="home" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: { color: "#008E97" },
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused ? <Ionicons name="person" size={24} color="black" /> : <Ionicons name="person-outline" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarLabel: "Cart",
                    tabBarLabelStyle: { color: "#008E97" },
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused ? <Ionicons name="cart" size={24} color="black" /> : <Ionicons name="cart-outline" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Main"
                    component={BottomTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Info"
                    component={ProductInfoScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Address"
                    component={AddAddressScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Add"
                    component={AddressScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Order"
                    component={OrderScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Men"
                    component={MenCloScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Women"
                    component={WomenCloSreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Jewelery"
                    component={JeweleryScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Electronic"
                    component={ElectrictionScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({});
