import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyBAOBxGEnMkC4QLldAVWW4CacMD6105Ag4",
    authDomain: "clone-d33b4.firebaseapp.com",
    databaseURL: "https://clone-d33b4.firebaseio.com",
    projectId: "clone-d33b4",
    storageBucket: "clone-d33b4.appspot.com",
    messagingSenderId: "544810972689",
    appId: "1:544810972689:web:247c03085763eb93a8a3b0",
    measurementId: "G-0Y5QF8BL3D"

});


const auth = firebase.auth();

export {auth};