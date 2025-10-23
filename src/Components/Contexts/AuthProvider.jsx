import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
import { AuthContext } from './AuthContext';



const AuthProvider = ({children}) => {
    const [userInfo, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createAccountEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (name, imgLink) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imgLink
        })
    } 

    const userLogOut = () => {
        return signOut(auth)
    }

    const userEmailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                console.log("UseEffect User:", user)
                setLoading(false)
                setUser(user)
            } else{
                setUser(null)
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