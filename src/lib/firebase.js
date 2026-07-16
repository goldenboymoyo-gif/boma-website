import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAvKLMdZ-_eaUEDRS2GsjpdYyLvmzu_Nzk',
  authDomain: 'boma-experience.firebaseapp.com',
  projectId: 'boma-experience',
  storageBucket: 'boma-experience.firebasestorage.app',
  messagingSenderId: '731297750338',
  appId: '1:731297750338:web:7d8d82cf405772a4fe7cdb',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
