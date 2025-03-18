import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const handleChangeEmail = (text) => setEmail(text);
  const handleChangePassword = (text) => setPassword(text);
  const handleChangeName = (text) => setName(text);

  const handleSubmit = async () => {
    const user = { name, email, password };
    try {
      const response = await axios.post('http://localhost:8000/register', user);
      console.log(response);
      Alert.alert("Successfully registered");
    } catch (error) {
      console.log(error);
      Alert.alert(`Error: ${error}`);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <View>
        <Image style={{ width: 150, height: 100 }} source={{ uri: "./assets/assets/zalo-logo-inhoahiep-1.png" }} />
      </View>
      <KeyboardAvoidingView>
        <View>
          <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 12, color: '#041E42', textAlign: 'center' }}>
            Register To Your Account
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
              <AntDesign style={styles.icon} name="user" size={24} color="black" />
              <TextInput
                style={styles.input}
                placeholder='Enter the name'
                value={name}
                onChangeText={handleChangeName}
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
            <View style={styles.forgotContainer}>
              <Text>Keep me Logged in</Text>
              <Text style={{ color: '#007FFF' }}>Forgot Password?</Text>
            </View>
            <View style={{ marginTop: 80 }}>
              <Pressable onPress={handleSubmit} style={styles.registerButton}>
                <Text style={styles.buttonText}>Register</Text>
              </Pressable>
              <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 12 }}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: 'gray' }}>Already have an account, Sign In</Text>
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
  forgotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12
  },
  registerButton: {
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

export default RegisterScreen;
