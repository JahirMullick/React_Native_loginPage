
// TODO: Code V1

// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import { Link } from 'expo-router';

// const OtpVerification = () => {
//     const route = useRoute();
//     const { phoneNumber } = route.params || {};
//     const maskedPhoneNumber = phoneNumber ? `********${phoneNumber.slice(-3)}` : '**********';

//     const [otp, setOtp] = useState(['', '', '', '']);
//     const [timer, setTimer] = useState(10);
//     const [resendVisible, setResendVisible] = useState(false);
//     const inputRefs = useRef([]); // Create refs array for each OTP input

//     useEffect(() => {
//         let interval;
//         if (timer > 0) {
//             interval = setInterval(() => {
//                 setTimer((prevTimer) => prevTimer - 1);
//             }, 1000);
//         } else {
//             setResendVisible(true);
//         }
//         return () => clearInterval(interval);
//     }, [timer]);

//     const handleOtpChange = (value, index) => {
//         if (/^\d*$/.test(value)) {  // Check if value is a digit
//             const otpCopy = [...otp];
//             otpCopy[index] = value;
//             setOtp(otpCopy);

//             // Move to the next input if value is entered and it's not the last input
//             if (value && index < otp.length - 1) {
//                 inputRefs.current[index + 1].focus();
//             }
//         }
//     };

//     const handleKeyPress = (e, index) => {
//         if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
//             inputRefs.current[index - 1].focus(); // Move focus to the previous input on backspace if current is empty
//         }
//     };

//     const handleResend = () => {
//         setTimer(60);
//         setResendVisible(false);
//     };

//     const handleSubmit = () => {
//         // Logic for submitting OTP
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>OTP verification</Text>
//             <Text style={styles.subTitle}>
//                 Verification code sent to this number:   {maskedPhoneNumber}
//                 {/* Enter the verification code we sent you on:   {maskedPhoneNumber} */}
//             </Text>
//             <View style={styles.otpContainer}>
//                 {otp.map((digit, index) => (
//                     <TextInput
//                         key={index}
//                         ref={(el) => inputRefs.current[index] = el} // Assign ref to each input
//                         style={styles.otpInput}
//                         inputMode="numeric"
//                         maxLength={1}
//                         onChangeText={(value) => handleOtpChange(value, index)}
//                         onKeyPress={(e) => handleKeyPress(e, index)}
//                         value={digit}
//                     />
//                 ))}
//             </View>

//             {resendVisible ? (
//                 <Pressable onPress={handleResend}>
//                     <Text style={styles.resendText}>Didn't receive code? <Text style={styles.resendLink}>Resend</Text></Text>
//                 </Pressable>
//             ) : (
//                 <Text style={styles.timerText}>{`00:${timer < 10 ? `0${timer}` : timer}`}</Text>
//             )}
//             <Pressable style={styles.continueButton} onPress={handleSubmit}>
//                 <Link href={{ pathname: 'choosetemplate' }}>
//                     <Text style={styles.continueButtonText}>Continue</Text>
//                 </Link>
//             </Pressable>

//             <Pressable>
//                 <Link href={{ pathname: 'LoginWithPassword', params: { name: 'LoginWithPassword' } }} style={styles.tryAnotherText}>
//                     Try another Option?
//                 </Link>
//             </Pressable>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 20,
//         backgroundColor: '#fff',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: 10,
//     },
//     subTitle: {
//         fontSize: 16,
//         textAlign: 'center',
//         marginBottom: 30,
//     },
//     otpContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         marginBottom: 20,
//     },
//     otpInput: {
//         borderWidth: 1,
//         borderColor: '#ddd',
//         width: 50,
//         height: 50,
//         textAlign: 'center',
//         fontSize: 18,
//         borderRadius: 5,
//     },
//     resendText: {
//         textAlign: 'center',
//         marginVertical: 10,
//     },
//     resendLink: {
//         color: 'orange',
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: 20,
//         fontSize: 16,
//     },
//     timerText: {
//         textAlign: 'center',
//         marginBottom: 20,
//         fontSize: 16,
//         color: 'gray',
//     },
//     continueButton: {
//         backgroundColor: '#005F40',
//         paddingVertical: 15,
//         alignItems: 'center',
//         borderRadius: 5,
//         marginBottom: 20,
//     },
//     continueButtonText: {
//         color: '#fff',
//         fontSize: 18,
//     },
//     tryAnotherText: {
//         textAlign: 'center',
//         color: 'orange',
//         marginTop: 20,
//     },
// });

// export default OtpVerification;


// TODO: Code V2

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { useRouter, useSearchParams } from 'expo-router';
import { Link } from 'expo-router';
import { useRoute } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';


const OtpVerification = () => {
    const route = useRoute();
    const router = useRouter();
    // const { confirmation } = useSearchParams(); // Get the confirmation passed from the login page

    const { phoneNumber } = route.params || {};
    // const confirmation = JSON.parse(confirmString); // Convert the confirmation string back to an object
    const maskedPhoneNumber = phoneNumber ? `********${phoneNumber.slice(-3)}` : '**********';

    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(10);
    const [resendVisible, setResendVisible] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            setResendVisible(true);
        }
        return () => clearInterval(interval);
    }, [timer]);



    const handleOtpChange = (value, index) => {
        if (/^\d*$/.test(value)) {
            const otpCopy = [...otp];
            otpCopy[index] = value;
            setOtp(otpCopy);

            if (value && index < otp.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = () => {
        // Simulate checking if the user exists
        const userExists = checkUserExistence(phoneNumber);
        // const userExists = false;

        if (userExists) {
            // Navigate to the template page if user exists
            router.push({ pathname: '/choosetemplate' });
        } else {
            // Navigate to account setup page if user is new
            router.push({ pathname: '/AccountSetup' });
        }
    };



    const handleResend = () => {
        // Logic for resending OTP
        setTimer(60); // Reset the timer to 90 seconds
        setResendVisible(false); // Hide "Resend" and show the timer again
    };;


    // // Mock function to check user existence - replace with actual API call
    const checkUserExistence = (phoneNumber) => {
        // Implement the logic to check if the user exists, e.g., API call
        // Here, we are just simulating with a random condition
        return Math.random() > 0.5; // Replace this with real user existence check
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>OTP verification</Text>
            <Text style={styles.subTitle}>
                Enter the verification code we sent you on: {maskedPhoneNumber}
            </Text>
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(el) => inputRefs.current[index] = el}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(value) => handleOtpChange(value, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        value={digit}
                    />
                ))}
            </View>

            {resendVisible ? (
                <Pressable onPress={handleResend}>
                    <Text style={styles.resendText}>Didn't receive code? <Text style={styles.resendLink}>Resend</Text></Text>
                </Pressable>
            ) : (
                <Text style={styles.timerText}>{`00:${timer < 10 ? `0${timer}` : timer}`}</Text>
            )}
            <Pressable style={styles.continueButton} onPress={handleSubmit}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </Pressable>

            <Pressable>
                <Link href={{ pathname: 'LoginWithPassword', params: { name: 'LoginWithPassword' } }} style={styles.tryAnotherText}>
                    Try another Option?
                </Link>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
    },
    otpInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        width: 50,
        height: 50,
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 5,
    },
    resendText: {
        textAlign: 'center',
        marginVertical: 10,
    },
    resendLink: {
        color: 'orange',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 16,
    },
    timerText: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 16,
        color: 'gray',
    },
    continueButton: {
        backgroundColor: '#005F40',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    tryAnotherText: {
        textAlign: 'center',
        color: 'orange',
        marginTop: 20,
    },
});

export default OtpVerification;


