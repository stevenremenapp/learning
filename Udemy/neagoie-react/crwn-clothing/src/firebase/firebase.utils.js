import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBxKqMaXo7w9hFXvblz_ZKjl4XKLMiPi6Y",
  authDomain: "crwn-db-8de5a.firebaseapp.com",
  databaseURL: "https://crwn-db-8de5a.firebaseio.com",
  projectId: "crwn-db-8de5a",
  storageBucket: "crwn-db-8de5a.appspot.com",
  messagingSenderId: "998558629214",
  appId: "1:998558629214:web:0face098d4a97a5e79e3cf",
  measurementId: "G-X4W1MKQVB1"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
} 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;