import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use this icon library

const LoginWithPassword = () => {
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login with Password.</Text>
            <Text style={styles.subtitle}>Please sign in to your account</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={password}
                    textContentType='password'
                    onChangeText={setPassword}
                    placeholder="Password"
                    secureTextEntry={!isPasswordVisible}
                />
                <Pressable onPress={togglePasswordVisibility} style={styles.icon}>
                    <Ionicons
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={20}
                        color="black"
                    />
                </Pressable>
            </View>
            <Pressable>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </Pressable>
            <Pressable style={styles.signInButton}>
                <Text style={styles.signInText}>Sign In</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '12%',
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
    icon: {
        marginLeft: 10,
    },
    forgotPassword: {
        color: '#FF9900',
        textAlign: 'right',
        marginBottom: 20,
    },
    signInButton: {
        backgroundColor: '#005F40',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    signInText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default LoginWithPassword;
