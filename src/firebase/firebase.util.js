import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
   apiKey: "AIzaSyAvSfdGt4BJqKNYRRi9A8dwl5XS_Zp4DyY",
   authDomain: "crown-shop-db-5608f.firebaseapp.com",
   projectId: "crown-shop-db-5608f",
   storageBucket: "crown-shop-db-5608f.appspot.com",
   messagingSenderId: "733849904810",
   appId: "1:733849904810:web:e7e876f84ae2c04d0092d3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { firebase };
