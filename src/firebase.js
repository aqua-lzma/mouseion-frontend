import firebaseMain from 'firebase/app'
import 'firebase/firestore'

firebaseMain.initializeApp({
  projectId: 'mouseion-tis-atmos'
})

export const firebase = firebaseMain

export const firestore = firebase.firestore()
