import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZXFUFaIBeAh1yWzdr_fUrcln19B8nsR4",
    authDomain: "adie-and-blake-wedding.firebaseapp.com",
    projectId: "adie-and-blake-wedding",
    storageBucket: "adie-and-blake-wedding.appspot.com",
    messagingSenderId: "658675168704",
    appId: "1:658675168704:web:191df86acac196da230425"
}

// initialize firebase app   
initializeApp(firebaseConfig)

// initialize firestore
const db = getFirestore()

export { db }