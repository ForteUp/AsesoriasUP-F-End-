import {Outlet, Navigate} from "react-router-dom";
import React, {useContext} from "react";
import AuthContext from "../Context/AuthContext.jsx";


function PrivateAsesorRoute({children}) {
    let {user} = useContext(AuthContext)
    console.log(user)
    return (
           user && user.tipo === 'asesor' ? children : <Navigate to='/login'/>
    );
}

export default PrivateAsesorRoute;