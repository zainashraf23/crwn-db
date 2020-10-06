import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQuDPDOva7K-DmBP2BptUkCCdR5c6EM7s",
    authDomain: "crwn-db-18a37.firebaseapp.com",
    databaseURL: "https://crwn-db-18a37.firebaseio.com",
    projectId: "crwn-db-18a37",
    storageBucket: "crwn-db-18a37.appspot.com",
    messagingSenderId: "1068024936948",
    appId: "1:1068024936948:web:0807eadbc28668f0cca1a1"      
}

export const createUserProfileDocument = async (userAuth,additionalData) =>{
if (!userAuth) return;
const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = userRef.get();
if(!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })

    }catch (error) {
        console.log('error creating user',error.message);

    }
}
return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);





export default firebase;