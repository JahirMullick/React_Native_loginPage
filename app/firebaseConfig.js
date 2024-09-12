// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import * as firebase from 'firebase';
// Your Firebase configuration from the google-services.json file
const firebaseConfig = {
    apiKey: "AIzaSyDXZ05aCbPUxfl03pvVLOPYRAIkwGO8Cno",
    authDomain: "otpauthentication-deb92.firebaseapp.com", // Add authDomain manually
    projectId: "otpauthentication-deb92",
    storageBucket: "otpauthentication-deb92.appspot.com",
    messagingSenderId: "476664793679",
    appId: "1:476664793679:android:777f3d32405405ad04783a",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Export the auth instance to use in your components
const auth = getAuth(app);

export { auth };
