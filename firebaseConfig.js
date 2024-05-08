import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAnaFJsEiKsvtUIUoBzHqx_Yx5VTGG3c0k',
  authDomain: 'recipes-app-d7c9e.firebaseapp.com',
  projectId: 'recipes-app-d7c9e',
  storageBucket: 'recipes-app-d7c9e.appspot.com',
  messagingSenderId: '752624419776',
  appId: '1:752624419776:web:8b4975eb80f8b677efbe25',
  measurementId: 'G-PCBWJBEL36',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
