import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDRk4x5CMmXRdHsrJpZYbi3ESTcvsQ_zr4",
  authDomain: "contentmanagment-86d2b.firebaseapp.com",
  projectId: "contentmanagment-86d2b",
  storageBucket: "contentmanagment-86d2b.appspot.com",
  messagingSenderId: "516672648685",
  appId: "1:516672648685:web:99a1f4b2eac52574a8e3e4",
  measurementId: "G-RRJ8GXDL38"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;