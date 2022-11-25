import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const app = initializeApp({
    apiKey: "AIzaSyDCD9YQRugXix07RZ-H4T3xN7RSCIeZqRs",
    authDomain: "semantic-sunshine.firebaseapp.com",
    databaseURL: "https://semantic-sunshine-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "semantic-sunshine",
    storageBucket: "semantic-sunshine.appspot.com",
    messagingSenderId: "868993732449",
    appId: "1:868993732449:web:8ff5ffcd3e0f06d4393f20",
})

export const auth = getAuth(app)
export const db = getDatabase(app)