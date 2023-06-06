import React, { createContext, useEffect, useState } from 'react'
import  {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import app from '../../firebase.config'
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
        })
        return () => {
            return unsubscribe()
        }
    },[])

    console.log(user)


    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        return signOut(auth)
    }





    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
    }





  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider