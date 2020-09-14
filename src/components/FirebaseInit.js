import firebase from '@react-native-firebase/app';
// import 'firebase/firestore';
// Your secondary Firebase project credentials...

const config = {
    apiKey: 'AIzaSyDh3V_5L4eYMuS1l5_1ilCo0sWx22t7ZJg',
    authDomain: 'goodbot-289506.firebaseapp.com',
    databaseURL: 'https://goodbot-289506.firebaseio.com',
    projectId: 'goodbot-289506',
    storageBucket: 'goodbot-289506.appspot.com',
    messagingSenderId: '265141903430',
    appId: '1:265141903430:web:b7bd88f12e4e4449b32a47',
    measurementId: 'G-M4WMPMNGPK',
};

export default !firebase.apps.length 
  ? firebase.initializeApp(config)