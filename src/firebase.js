import firebase from "firebase";



const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyCi271XQ_VbH29B2ohSSbnPRu8wacUnqY8",
  authDomain: "messenger-7a987.firebaseapp.com",
  projectId: "messenger-7a987",
  storageBucket: "messenger-7a987.appspot.com",
  messagingSenderId: "643450698899",
  appId: "1:643450698899:web:2c69c023a26e4289ca6166",
  measurementId: "G-1GQJTP27WC"

})

const db = firebaseApp.firestore()

export default db 