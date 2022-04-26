import React, {useContext, useState, useEffect} from "react";
import { auth } from "../../firebase"

const AuthenticationContext = React.createContext();

//tutorial used for gudience on implementing auth
//https://www.youtube.com/watch?v=PKwu15ldZ7k

export function useAuthentication() {
    return useContext(AuthenticationContext);
}

const AuthenticationProvider = ({children}) => {
     
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    function registerUser(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
      return auth.signInWithEmailAndPassword(email, password);
    }

    useEffect(()=> {
    const unsub = auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
    setLoading(false)
     })
     return unsub
    }, [])

    
    function signOut() {
      setIsAuthenticated(false);
      return auth.signOut();
    }

      const value = {
        currentUser,
        registerUser,
        login,
        signOut,
      };
      
    return (
      <AuthenticationContext.Provider value={value}>
        {!loading && children}
      </AuthenticationContext.Provider>
    );

}

export default AuthenticationProvider