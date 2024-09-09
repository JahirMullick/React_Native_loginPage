// import React, { useState, useEffect } from 'react';
// import { Link } from 'expo-router';
// import { useRoute } from '@react-navigation/native';
// import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

// const OtpVerification = () => {

//     const route = useRoute();
//     const { phoneNumber } = route.params || {}; // Destructure phoneNumber from route params
//     const maskedPhoneNumber = phoneNumber ? `********${phoneNumber.slice(-3)}` : '**********'; // Mask all but the last two digits

//     const [otp, setOtp] = useState(['', '', '', '']);
//     const [timer, setTimer] = useState(10); // 10 seconds countdown
//     const [resendVisible, setResendVisible] = useState(false); // State to show "Resend" when timer reaches zero

//     useEffect(() => {
//         let interval;
//         if (timer > 0) {
//             // Set up a timer that decreases every second
//             interval = setInterval(() => {
//                 setTimer((prevTimer) => prevTimer - 1);
//             }, 1000);
//         } else {
//             // When timer reaches zero, show the "Resend" text
//             setResendVisible(true);
//         }
//         // Cleanup the interval on component unmount
//         return () => clearInterval(interval);
//     }, [timer]);


//     const handleOtpChange = (value, index) => {
//         const otpCopy = [...otp];
//         otpCopy[index] = value;
//         setOtp(otpCopy);
//     };

//     const handleResend = () => {
//         // Logic for resending OTP
//         setTimer(60); // Reset the timer to 90 seconds
//         setResendVisible(false); // Hide "Resend" and show the timer again
//     };
//     const handleSubmit = () => {
//         // Logic for submitting OTP
//     };


//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>OTP verification</Text>
//             <Text style={styles.subTitle}>
//                 Enter the verification code we sent you on: {maskedPhoneNumber}
//             </Text>
//             <View style={styles.otpContainer}>
//                 {otp.map((digit, index) => (
//                     <TextInput
//                         key={index}
//                         style={styles.otpInput}
//                         inputMode="numeric"
//                         maxLength={1}
//                         onChangeText={(value) => handleOtpChange(value, index)}
//                         value={digit}
//                     />
//                 ))}
//             </View>


//             {resendVisible ? (
//                 <Pressable onPress={handleResend}>
//                     <Text style={styles.resendText}>Didn't receive code? <Text style={styles.resendLink}>Resend</Text></Text>
//                     {/* <Text style={styles.resendLink}>Resend</Text> */}
//                 </Pressable>
//             ) : (
//                 <Text style={styles.timerText}>{`00:${timer < 10 ? `0${timer}` : timer}`}</Text>
//             )}
//             <Pressable style={styles.continueButton} onPress={handleSubmit}>
//                 <Link href={{ pathname: 'choosetemplate' }}>
//                     <Text style={styles.continueButtonText}>Continue</Text>
//                 </Link>
//             </Pressable>

//             {/* <Pressable onPress={handleButtonClick}> */}
//             <Pressable >
//                 <Link href={{ pathname: 'LoginWithPassword', params: { name: 'LoginWithPassword' } }} style={styles.tryAnotherText}>Try another Option?</Link>
//                 {/* <Link href={{ pathname: 'choosetemplate' }} style={styles.tryAnotherText}>Try another Option?</Link> */}
//                 {/* <Text style={styles.tryAnotherText}>Try another Option?</Text> */}
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
//         // textAlign: 'center',
//         fontSize: 18,
//     },
//     tryAnotherText: {
//         textAlign: 'center',
//         color: 'orange',
//         marginTop: 20,
//     },
// });

// export default OtpVerification;



import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Link } from 'expo-router';

const OtpVerification = () => {
    const route = useRoute();
    const { phoneNumber } = route.params || {};
    const maskedPhoneNumber = phoneNumber ? `********${phoneNumber.slice(-3)}` : '**********';

    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(10);
    const [resendVisible, setResendVisible] = useState(false);
    const inputRefs = useRef([]); // Create refs array for each OTP input

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
        if (/^\d*$/.test(value)) {  // Check if value is a digit
            const otpCopy = [...otp];
            otpCopy[index] = value;
            setOtp(otpCopy);

            // Move to the next input if value is entered and it's not the last input
            if (value && index < otp.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1].focus(); // Move focus to the previous input on backspace if current is empty
        }
    };

    const handleResend = () => {
        setTimer(60);
        setResendVisible(false);
    };

    const handleSubmit = () => {
        // Logic for submitting OTP
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>OTP verification</Text>
            <Text style={styles.subTitle}>
                Verification code sent to this number:   {maskedPhoneNumber}
                {/* Enter the verification code we sent you on:   {maskedPhoneNumber} */}
            </Text>
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(el) => inputRefs.current[index] = el} // Assign ref to each input
                        style={styles.otpInput}
                        inputMode="numeric"
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
                <Link href={{ pathname: 'choosetemplate' }}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </Link>
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
