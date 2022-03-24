// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAV3088_12O8Smp18Ej4PphBjHfFvSGAX8',
  authDomain: 'league-of-naija-mm.firebaseapp.com',
  databaseURL:
    'https://league-of-naija-mm-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'league-of-naija-mm',
  storageBucket: 'league-of-naija-mm.appspot.com',
  messagingSenderId: '1091067944815',
  appId: '1:1091067944815:web:da2e05244cc7976366929a',
  measurementId: 'G-VS4D02XMM5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
