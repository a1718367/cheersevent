import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyDlHKeYYkaP3Ebm6piVFdV7uP0aICc6DdQ",
//   authDomain: "cheers-d14a9.firebaseapp.com",
//   projectId: "cheers-d14a9",
//   storageBucket: "cheers-d14a9.appspot.com",
//   messagingSenderId: "549518657696",
//   appId: "1:549518657696:web:873057997ed306ea5a61c5",
//   measurementId: "G-VPXQSXE845"
// })

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
  
})

export const db = app.firestore()
export const auth = app.auth()
export default app











