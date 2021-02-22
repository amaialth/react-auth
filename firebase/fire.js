import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC7HZ2WGEaMMIeg_68fDEfY_GM-RHUZXBw",
    authDomain: "auth-demo-4e909.firebaseapp.com",
    projectId: "auth-demo-4e909",
    storageBucket: "auth-demo-4e909.appspot.com",
    messagingSenderId: "758786712936",
    appId: "1:758786712936:web:f2a7c401980ba7e4e6e2dd",
    measurementId: "G-N1S1YXE10Q"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;