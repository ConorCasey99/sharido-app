import React, {useContext, useState, useEffect} from "react";
import { auth, updateProfile } from "../../firebase"

const AuthenticationContext = React.createContext();

export function useAuthentication() {
    return useContext(AuthenticationContext);
}

const AuthenticationProvider = (props) => {
     
    const [currentUser, setCurrentUser] = useState(null);
     

    function registerUser(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(()=> {
    const unsub = auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
     })
     return unsub
    }, [])
    

    function login(email, password) {
      return auth.signInWithEmailAndPassword(email, password);
    }

      const value = {
        currentUser,
        registerUser,
        login
      };









      
    return (
      <AuthenticationContext.Provider value={value}>
        {props.children}
      </AuthenticationContext.Provider>
    );

}

export default AuthenticationProvider