

// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ headerShown: false }} />
//       <Stack.Screen name="otpverification" options={{ headerShown: false }} />
//       <Stack.Screen name="AccountSetup" options={{ headerShown: false }} />
//       <Stack.Screen name="choosetemplate" options={{ headerShown: false }} />
//       <Stack.Screen name="LoginWithPassword" options={{ headerShown: false }} />
//       <Stack.Screen name="dashboard" options={{ headerShown: false }} />
//     </Stack>
//   );
// }


import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import firebase from '@react-native-firebase/app';

export default function RootLayout() {
  // useEffect(() => {
  //   // Initialize Firebase only if it hasn't been initialized already
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp();  // No need for config object here
  //   }
  // }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="otpverification" options={{ headerShown: false }} />
      <Stack.Screen name="AccountSetup" options={{ headerShown: false }} />
      <Stack.Screen name="choosetemplate" options={{ headerShown: false }} />
      <Stack.Screen name="LoginWithPassword" options={{ headerShown: false }} />
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
    </Stack>
  );
}

