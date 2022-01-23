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

    function login(email, password) {
      return auth.signInWithEmailAndPassword(email, password);
    }

      const value = {
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