import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    
    if(loading){
        return <progress className='progress w-96'></progress>
    }
    if(user){
        return children
    }else{
        return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>
    }
}

export default PrivateRoute