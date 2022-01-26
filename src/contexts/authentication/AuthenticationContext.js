import React, {useContext, useState, useEffect} from "react";
import { auth, updateProfile } from "../../firebase"

const AuthenticationContext = React.createContext();

export function useAuthentication() {
    return useContext(AuthenticationContext);
}

const AuthenticationProvider = (props) => {
     
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true)

    function registerUser(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(()=> {
    const unsub = auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
    setLoading(false)
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
        {!loading && props.children}
      </AuthenticationContext.Provider>
    );

}

export default AuthenticationProvider