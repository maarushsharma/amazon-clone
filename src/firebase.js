import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDe4qYvrDn505envnazEVX4U9gyN2TFZQ0",
    authDomain: "clone-fdab2.firebaseapp.com",
    projectId: "clone-fdab2",
    storageBucket: "clone-fdab2.appspot.com",
    messagingSenderId: "702035195664",
    appId: "1:702035195664:web:85d6ee9fb10ee87b22d795",
    measurementId: "G-ZDBPX3KG4Z"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth();

  export {db , auth};