import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider } from "firebase/auth";


const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();

    const [userInfo, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createAccountEmailPass = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (name, imgLink) => {
        setLoading(false)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imgLink
        })
    } 

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const googleSignIn = () => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }

    const userLogOut = () => {
        setLoading(false)
        return signOut(auth)
    }

    const userEmailLogin = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setLoading(false)
                setUser(user)
            } else{
                setUser(null)
                setLoading(false)
            }
        })

        return () => {
            unsubscribe()
        };
    }, [userInfo])

    const contextObj = {
        createAccountEmailPass,
        updateUserInfo,
        userLogOut,
        userEmailLogin,
        forgotPassword,
        googleSignIn,
        userInfo,
        setUser,
        loading
    }

    return (
        <AuthContext value={contextObj}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;