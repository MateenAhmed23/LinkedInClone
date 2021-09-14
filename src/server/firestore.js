import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGRKpfJaZfAV--R6E5pBz6_Ox2BctgGog",
  authDomain: "linkedinclone-2dd86.firebaseapp.com",
  projectId: "linkedinclone-2dd86",
  storageBucket: "linkedinclone-2dd86.appspot.com",
  messagingSenderId: "252098525019",
  appId: "1:252098525019:web:c870c899a2151b74038c7e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
