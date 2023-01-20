import {createContext, useState, useEffect} from "react";
import {server_url} from "../../main.js";
import {useNavigate} from 'react-router-dom'

const AuthContext = createContext(undefined);

export default AuthContext;

export const AuthProvider = ({children})=> {
    let [user, setUser] = useState(() => localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null)

 let navigate = useNavigate()
    function loginUser(event) {
        event.preventDefault()
        fetch(`${server_url}/login`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Correo: event.target['login-mail'].value,
            Password: event.target['login-pwd'].value,
          })
        })
            .then((response)=>{
                let data = response.json()
                if(response.status === 200){
                    // console.log(data)
                    data.then((values) => {
                        // console.log(JSON.stringify(data))
                        setUser(values)
                        console.log(JSON.stringify(values))
                        localStorage.setItem('user', JSON.stringify(values))
                        navigate('/citas')
                    //     setAuthTokens(values)
                    //     setUser(jwtDecode(values.access))
                    //     // console.log(user)
                    //     localStorage.setItem('authTokens', JSON.stringify(values))
                    //     navigate('/')
                    })
                }else{
                    alert('Something went wrong!')
                }
                // console.log(user)
            })
    }

    // let [user,setUser] = useState(null)
    let contextData = {
        user:user,
        loginUser:loginUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}