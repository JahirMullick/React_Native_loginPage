
// TODO: Testing purposes

import React, { useState } from 'react';
import { View, TextInput, Text, Button, CheckBox, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


export default function RegisterScreen() {

    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAgree, setIsAgree] = useState(false);

    const handleRegister = () => {

        if (!firstName || !lastName || !password) {
            Alert.alert('Error', 'Please fill in all required fields');
            return;
        }
        if (!isAgree) {
            Alert.alert('Error', 'You must agree to the terms and privacy policy');
            return;
        }
        // Registration Logic goes here
        Alert.alert('Success', `Account created for ${firstName} ${lastName}`);

        router.push({ pathname: '/choosetemplate' });
    };


    // const handleRegister = () => {
    //     router.push({ pathname: '/choosetemplate' });
    // };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create your new account</Text>
            <Text style={styles.subtitle}>Create an account to start looking for the food you like</Text>

            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />

            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email Address (Optional)"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isAgree}
                    onValueChange={setIsAgree}
                />
                <Text style={styles.label}>
                    I Agree with <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {

        fontSize: '30px',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: '10%',
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        marginBottom: '7%',
        height: '50px',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
    label: {
        marginLeft: 8,
        fontSize: 14,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#0c6a47',
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
