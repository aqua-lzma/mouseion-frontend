import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  projectId: 'mouseion-tis-atmos'
})

export const firebaseInstance = firebase

export const firestore = firebase.firestore()

export const artistsCol = firestore.collection('t2artists')

export const albumsCol = firestore.collection('t2albums')
