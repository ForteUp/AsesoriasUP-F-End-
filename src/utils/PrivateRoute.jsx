import {Outlet, Navigate} from "react-router-dom";
import React, {useContext} from "react";
// import AuthContext from "../context/AuthContext";


function PrivateRoute({children}) {
    // let {user} = useContext(AuthContext)
    let {user} = false
    return (
            user ? children : <Navigate to='/'/>
    );
}

export default PrivateRoute;