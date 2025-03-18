import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleChangeEmail = (text) => setEmail(text); 
    const handleChangePassword = (text) => setPassword(text);
    const handleSubmitLogin = async () => {
        try {
            // const userData = { email, password }; 
            // const response = await axios.post("http://localhost:8000/login", userData);
            // await AsyncStorage.setItem("authToken", response.data.token); 
            navigation.replace("Main"); 
        } catch (error) {   
            Alert.alert("Error", error.message);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <View>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={{ uri: "./assets/assets/zalo-logo-inhoahiep-1.png" }} />
                
            </View>
            <KeyboardAvoidingView>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 12, color: '#041E42', textAlign: 'center' }}>
                        Login In To Your Account
                    </Text>
                    <View style={{ marginTop: 50 }}>
                        <View style={styles.inputContainer}>
                            <MaterialIcons style={styles.icon} name="email" size={24} color="black" />
                            <TextInput
                                style={styles.input}
                                placeholder='Enter the email'
                                value={email}
                                onChangeText={handleChangeEmail}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <AntDesign style={styles.icon} name="lock" size={24} color="black" />
                            <TextInput
                                style={styles.input}
                                placeholder='Enter the password'
                                value={password}
                                secureTextEntry={true}
                                onChangeText={handleChangePassword}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
                            <Text>Keep me Logged in</Text>
                            <Text style={{ color: '#007FFF' }}>Forgot  Password?</Text>
                        </View>
                        <View style={{ marginTop: 80 }}>
                            <Pressable onPress={handleSubmitLogin} style={styles.loginButton}>
                                <Text style={styles.buttonText}>Login</Text>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('Register')} style={{ marginTop: 12 }}>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: 'gray' }}>Don't have an account, Sign Up?</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        alignItems: 'center',
        gap: 5,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 3
    },
    icon: {
        marginLeft: 8
    },
    input: {
        color: 'white',
        marginVertical: 10,
        width: 300
    },
    loginButton: {
        backgroundColor: '#FEBE10',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 6,
        padding: 15,
        width: 200
    },
    buttonText: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default LoginScreen;
