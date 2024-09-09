
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './loginscreen';
import OtpVerification from './otpverification';
// import LoginWithPassword from './LoginWithPassword';
// import Template from './choosetemplate';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerShown: false }} />
      {/* <Stack.Screen name=" " component={LoginWithPassword} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="Template" component={Template} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
};
