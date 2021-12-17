import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../../../services/firebase';
const AuthContext = React.createContext();
export const useAuth =  ()=>{
    return useContext(AuthContext);
}
export const AuthProvider = ({children}) =>{
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChange(user => {
            setCurrentUser(user);
        })

        return unsubscribe;
    },[]);
    const [currentUser,setCurrentUser] = useState();

    const signup = (email,password) => {
        return auth.createUserWithEmailAndPassword(email,password);
    }

    const login = (email,password) => {

    }
    const value = {
        currentUser,
        signup,
        login
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}