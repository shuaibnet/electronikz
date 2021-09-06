import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA_0w05NPj9epbKZu7U9p-QWfLkdtxGwFU",
    authDomain: "electronikz-efab9.firebaseapp.com",
    projectId: "electronikz-efab9",
    storageBucket: "electronikz-efab9.appspot.com",
    messagingSenderId: "669003384043",
    appId: "1:669003384043:web:f4945f1f2d31417171aaae",
    measurementId: "G-BXSDNPLJ7E"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
          const { displayName, email} = userAuth;
          const createdAt = new Date();

          try {
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          }
          catch (error) {
              console.log('error creating user', error.message);
          }

      }
      return userRef;
  };


export const addCollectionAndDocuments = async (collectionkey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionkey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

return await batch.commit();

};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;