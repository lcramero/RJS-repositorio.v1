
import "firebase/firestore";

import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCDAM2g9b4FHpkDQc-uTIMEl17gFj4ZD4A",
    authDomain: "reactapp-bbdd.firebaseapp.com",
    projectId: "reactapp-bbdd",
    storageBucket: "reactapp-bbdd.appspot.com",
    messagingSenderId: "937605614311",
    appId: "1:937605614311:web:4fd84ed8b84abe248df042",
    measurementId: "G-354D5NT0ZG"
};

const app = initializeApp (firebaseConfig);

export const db = getFirestore(app)