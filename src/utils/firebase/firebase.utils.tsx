import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAGaJRebUUoWSSOJY_51iAOVmhPdP9F-vk',
    authDomain: 'react-ecom-fe389.firebaseapp.com',
    projectId: 'react-ecom-fe389',
    storageBucket: 'react-ecom-fe389.appspot.com',
    messagingSenderId: '516543011258',
    appId: '1:516543011258:web:9f4efed69b46cf054ea583',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const createUserDocFromAuth = async userAuth => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)

    // if user doesnt exsit, create user
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
            })
        } catch (error) {
            console.log('something went wrong', error)
        }
    }

    return userDocRef
}
