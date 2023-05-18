import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const signUpUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
        displayName: name , photoURL: photo
      })
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            return unsubscribe();
        }
    },[])
    const authInfo={
        user,
        loading,
        signUpUser,
        updateUserProfile,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;