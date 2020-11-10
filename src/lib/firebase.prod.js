import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//seed db

//config here. 
const config = {}; //temp

const firebase = Firebase.initializeApp(config);

export { firebase };