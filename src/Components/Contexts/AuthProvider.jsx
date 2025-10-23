import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
import { AuthContext } from './AuthContext';



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createAccountEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (name, imgLink) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imgLink
        })
    } 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                console.log("UseEffect User:", user)
            } else{
                setUser(null)
            }
        })

        return () => {
            unsubscribe()
        };
    }, [])

    const contextObj = {
        createAccountEmailPass,
        updateUserInfo,
        user,
        setUser
    }

    return (
        <AuthContext value={contextObj}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;