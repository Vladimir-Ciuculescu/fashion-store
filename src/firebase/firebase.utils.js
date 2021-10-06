import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';  

const config = {
    apiKey: "AIzaSyAGk3IMypPuYFB3wIBdBBsuJqLI4WXc6YE",
    authDomain: "fashion-store-db-fd36f.firebaseapp.com",
    projectId: "fashion-store-db-fd36f",
    storageBucket: "fashion-store-db-fd36f.appspot.com",
    messagingSenderId: "167434546104",
    appId: "1:167434546104:web:7f48f2330d0fa50133bd4d",
    measurementId: "G-XM4DE0BQ55"
};
  
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
            })

        } catch (error) {
            console.log('Error creating user', error.message);
        }
    };

    return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//Let us select the account
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




