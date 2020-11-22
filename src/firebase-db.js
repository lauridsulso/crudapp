import firebase from "firebase/app"
import "firebase/firestore"

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyDKVExG1dhGDuH4fG_rtV1B35tV_98wmP0",
        authDomain: "crud-app-f5886.firebaseapp.com",
        databaseURL: "https://crud-app-f5886.firebaseio.com",
        projectId: "crud-app-f5886",
        storageBucket: "crud-app-f5886.appspot.com",
        messagingSenderId: "841758131151",
        appId: "1:841758131151:web:67d83ad7dba0e49d0308ba",
        measurementId: "G-PSCFY7RQJ1"
    })
    .firestore()

export const postRef = db.collection("posts")