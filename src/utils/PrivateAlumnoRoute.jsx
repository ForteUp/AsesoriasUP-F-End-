import {Outlet, Navigate} from "react-router-dom";
import React, {useContext} from "react";
import AuthContext from "../Context/AuthContext";


function PrivateAlumnoRoute({children}) {
    let {user} = useContext(AuthContext)
    alert(user)
    return (
        user ? children : <Navigate to='/'/>
    );
}

export default PrivateAlumnoRoute;