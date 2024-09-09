
// import React from 'react';
// import { View, Text, TextInput, Pressable, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
// import { useState } from 'react';

// const Login = ({ navigation }) => {

//     const [phoneNumber, setPhoneNumber] = useState('');

//     // const handleButtonClick = () => {
//     // Show alert with the entered phone number
//     // Alert.alert('OTP has been send to this phone number', `You entered: ${phoneNumber}`, [
//     //     { text: 'OK', onPress: () => navigation.navigate('OtpVerification') },
//     // ]);
//     // };


//     const handleButtonClick = () => {
//         // Navigates to the 'OtpVerification' screen
//         navigation.navigate('OtpVerification');
//     };


//     return (
//         <View style={styles.container} >
//             <View style={styles.glasseffect}>
//                 <View style={styles.drawer}>
//                     <Text style={styles.drawerHeader}>Login</Text>
//                     <Text style={styles.drawerSubHeader}>Enter your number to proceed </Text>

//                     <View style={styles.listAddress}>
//                         <Image source={{ uri: 'https://img.icons8.com/?size=100&id=5402&format=png&color=000000' }} style={styles.icon} />
//                         <TextInput
//                             placeholder="Enter phone number"
//                             inputMode="phone-pad"
//                             // inputMode="phone-pad"
//                             onChangeText={setPhoneNumber}
//                             style={styles.phoneNumber}></TextInput>
//                     </View>

//                     <Pressable style={styles.continueButton}
//                         onPress={handleButtonClick} >
//                         <Text style={styles.continueButtonText}>Continue</Text>
//                     </Pressable>
//                     {/* <TouchableOpacity style={styles.continueButton}
//                         onPress={handleButtonClick} >
//                         <Text style={styles.continueButtonText}>Continue</Text>
//                     </TouchableOpacity> */}


//                 </View>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor: '#f8f9fa',
//         resizeMode: 'cover', // or 'contain'
//         justifyContent: 'center',
//     },

//     glasseffect: {
//         backgroundColor: 'rgba(0, 0, 0, 0.1)',
//         height: '100%',
//         justifyContent: 'center',
//     },
//     header: {
//         paddingHorizontal: 20,
//         paddingTop: 50,
//     },
//     headerText: {
//         fontSize: 24,
//         fontWeight: '600',
//         color: '#101010',
//     },
//     subHeaderText: {
//         fontSize: 14,
//         color: '#878787',
//         marginTop: 5,
//     },
//     inputContainer: {
//         paddingHorizontal: 20,
//         marginTop: 30,
//     },
//     inputLabel: {
//         fontSize: 14,
//         fontWeight: '500',
//         color: '#101010',
//         marginBottom: 10,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#D6D6D6',
//         borderRadius: 8,
//         padding: 15,
//         marginBottom: 20,
//         backgroundColor: '#FFFFFF',
//     },
//     drawer: {
//         // marginTop: '70%',
//         marginBottom: '-87%',
//         height: '60%',
//         width: '100%',
//         // justifyContent: 'center',
//         backgroundColor: '#FFFFFF',
//         borderTopLeftRadius: 24,
//         borderTopRightRadius: 24,
//         padding: 20,
//         boxShadowColor: '#000',
//         boxShadowOffset: { width: 0, height: 2 },
//         boxShadowOpacity: 0.2,
//         boxboxShadowRadius: 2,
//         elevation: 5,
//     },
//     drawerHeader: {
//         fontSize: 30,
//         alignItems: 'center',
//         fontWeight: '700',
//         color: '#101010',
//         marginBottom: 10,
//     },
//     drawerSubHeader: {
//         fontSize: 14,
//         fontWeight: '500',
//         color: '#878787',
//         marginBottom: 20,
//     },
//     listAddress: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         borderWidth: 1,
//         borderColor: '#318616',
//         borderRadius: 16,
//         padding: 15,
//         marginBottom: 20,
//     },
//     icon: {
//         width: 24,
//         height: 24,
//     },
//     phoneNumber: {
//         fontSize: 16,
//         color: '#101010',
//         width: '90%',
//     },
//     continueButton: {
//         backgroundColor: '#156651',
//         borderRadius: 11,
//         paddingVertical: 16,
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     continueButtonText: {
//         color: '#FFFFFF',
//         fontSize: 14,
//         fontWeight: '600',
//     },
//     separatorContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     separatorLine: {
//         flex: 1,
//         height: 1,
//         backgroundColor: '#878787',
//     },
//     separatorText: {
//         marginHorizontal: 10,
//         color: '#878787',
//         fontSize: 14,
//         fontWeight: '500',
//     },
//     signInButton: {
//         backgroundColor: '#1F1F1F',
//         borderRadius: 11,
//         paddingVertical: 16,
//         alignItems: 'center',
//     },
//     signInButtonText: {
//         color: '#FFFFFF',
//         fontSize: 14,
//         fontWeight: '600',
//     },
// });

// export default Login



import React from 'react';
import { View, Text, TextInput, Pressable, Image, StyleSheet } from 'react-native';
import { useState } from 'react';

const Login = ({ navigation }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const isPhoneNumberValid = phoneNumber.length === 10 && /^\d+$/.test(phoneNumber); // Checks if phone number has 10 digits and contains only numbers

    const handleButtonClick = () => {
        // Navigates to the 'OtpVerification' screen
        navigation.navigate('OtpVerification', { phoneNumber });
    };

    return (
        <View style={styles.container}>
            <View style={styles.glasseffect}>
                <View style={styles.drawer}>
                    <Text style={styles.drawerHeader}>Login</Text>
                    <Text style={styles.drawerSubHeader}>Enter your number to proceed</Text>

                    <View style={styles.listAddress}>
                        <Image source={{ uri: 'https://img.icons8.com/?size=100&id=5402&format=png&color=000000' }} style={styles.icon} />
                        <TextInput
                            placeholder="Enter phone number"
                            inputMode="phone-pad"
                            onChangeText={setPhoneNumber}
                            value={phoneNumber}
                            maxLength={10} // Limit input to 10 characters
                            style={styles.phoneNumber}
                        />
                    </View>

                    <Pressable
                        style={[styles.continueButton, !isPhoneNumberValid && styles.disabledButton]}
                        onPress={handleButtonClick}
                        disabled={!isPhoneNumberValid} // Disable button if phone number is not valid
                    >
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    glasseffect: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: '100%',
        justifyContent: 'center',
    },
    drawer: {
        marginBottom: '-87%',
        height: '60%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20,
        elevation: 5,
    },
    drawerHeader: {
        fontSize: 30,
        fontWeight: '700',
        color: '#101010',
        marginBottom: 10,
    },
    drawerSubHeader: {
        fontSize: 14,
        fontWeight: '500',
        color: '#878787',
        marginBottom: 20,
    },
    listAddress: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#318616',
        borderRadius: 16,
        padding: 15,
        marginBottom: 20,
    },
    icon: {
        width: 24,
        height: 24,
    },
    phoneNumber: {
        fontSize: 16,
        color: '#101010',
        width: '90%',
    },
    continueButton: {
        backgroundColor: '#156651',
        borderRadius: 11,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 20,
    },
    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
    disabledButton: {
        backgroundColor: '#c7c7c7', // Lighter color for the disabled state
    },
});

export default Login;
