import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAjVy0CtnJOIGnqdQw47e34IIbotU5GnoU",
    authDomain: "netflix-clone-19921.firebaseapp.com",
    databaseURL: "https://netflix-clone-19921.firebaseio.com",
    projectId: "netflix-clone-19921",
    storageBucket: "netflix-clone-19921.appspot.com",
    messagingSenderId: "853420734523",
    appId: "1:853420734523:web:8491ec469d77e668f2041e"
};

const firebase = Firebase.initializeApp(config);

//seeded database -> use this only if need to reseed - USE WITH CAUTION
// seedDatabase(firebase);

export { firebase };