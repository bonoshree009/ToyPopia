import React, { createContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,  } from "firebase/auth";

import { app } from '../firebase.config';

export const AuthContext = createContext()

 const auth = getAuth(app);
const AuthProvider = ({children}) => {
   const [user, setuser]= useState(null)
    const [loading,setloding]= useState(true)

    const createuser =(email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    
    const signIn =(email,pass)=>{
        setloding(true)
    return signInWithEmailAndPassword(auth,email,pass)
    }

     const updateuser = (updateddata) =>{
        return updateProfile(auth.currentUser,updateddata)
     }

        useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
    setuser(currentuser)
    setloding(false)
});
return ()=> unsubscribe()

    },[])

    const authdata ={createuser,logOut,signIn,updateuser,loading,user,setuser}

   
    return <AuthContext value={authdata}>{children}</AuthContext>
};

export default AuthProvider;
    {/* const createuser = (email,pass)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const logOut =()=>{
        return signOut(auth)
    }

    
    const signIn =(email,pass)=>{
        setloding(true)
    return signInWithEmailAndPassword(auth,email,pass)
    }

     const updateuser = (updateddata) =>{
        return updateProfile(auth.currentUser,updateddata)
     }
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
    setuser(currentuser)
    setloding(false)
});
return ()=> unsubscribe()

    },[])



    const authdata ={
        user,
        setuser,
        createuser,logOut,signIn,loding,setloding,updateuser
    }
  
    return <AuthContext value={authdata}>{children}</AuthContext>
}; */}