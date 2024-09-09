import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-elements/themed';

export default function Accountsetup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agreeToTerms: false,
    });

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegister = () => {
        // Handle registration logic here
        console.log(formData);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create your new account</Text>
            <Text style={styles.subtitle}>Create an account to start looking for the food you like</Text>

            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={formData.firstName}
                onChangeText={(value) => handleInputChange('firstName', value)}
            />

            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={formData.lastName}
                onChangeText={(value) => handleInputChange('lastName', value)}
            />

            <TextInput
                style={styles.input}
                placeholder="Email Address (Optional)"
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={formData.password}
                onChangeText={(value) => handleInputChange('password', value)}
                secureTextEntry
            />

            <View style={styles.checkboxContainer}>
                <CheckBox
                    checked={formData.agreeToTerms}
                    onPress={() => handleInputChange('agreeToTerms', !formData.agreeToTerms)}
                />
                <Text style={styles.checkboxLabel}>
                    I Agree with
                    <Text style={styles.link}> Terms of Service </Text>
                    and
                    <Text style={styles.link}> Privacy Policy</Text>
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
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 14,
        color: '#333',
    },
    link: {
        color: '#2e64e5',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#004225',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
