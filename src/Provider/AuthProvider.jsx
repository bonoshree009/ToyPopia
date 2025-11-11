import React, { createContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from "firebase/auth";

import { app } from '../firebase.config';


export const AuthContext = createContext()

 const auth = getAuth(app);
const googleProvider =new GoogleAuthProvider()

const AuthProvider = ({children}) => {
   const [user, setuser]= useState(null)
    const [loading,setloading]= useState(true)

    const createuser =(email,pass)=>{
            setloading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    
    const signIn =(email,pass)=>{
        setloading(true)
    return signInWithEmailAndPassword(auth,email,pass)
    }

     const updateuser = (updateddata) =>{
           // setloading(true)
        return updateProfile(auth.currentUser,updateddata)
     }

     const forgetpass =(email)=>{
        return sendPasswordResetEmail(auth,email)
     }
     const google=()=>{
       return signInWithPopup(auth,googleProvider)
     }

        useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
    if(currentuser) {
     
      setuser(currentuser);
    } else {
      setuser(null);
    }

    setloading(false)
});
return ()=> unsubscribe()

    },[])

    const authdata ={createuser,logOut,signIn,updateuser,loading,user,setuser,forgetpass,google}

   
    return <AuthContext value={authdata}>{children}</AuthContext>
};

export default AuthProvider;
  