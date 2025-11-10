import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Components/Spinner'

const PrivateRroute = ({children}) => {
    const {user,loding} =use(AuthContext)
    const location =useLocation()
    if(loding){
        return <Spinner></Spinner>
    }
    if(user && user?.email){
        return children
    }
    else{
        return <Navigate state={location.path} to="/auth/login"></Navigate>
    }
};

export default PrivateRroute;