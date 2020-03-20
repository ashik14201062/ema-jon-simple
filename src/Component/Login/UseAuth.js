import React from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase.config';
import  { useState, createContext } from 'react';


firebase.initializeApp(firebaseConfig);
const AuthContext = createContext();


export const AuthContextProvider = (props) =>{
        
    const auth = Auth();
    return<AuthContext.provider value ={auth}>{props.children} </AuthContext.provider>
}






const Auth =() => {
            
  const [user,setUser] = useState(null);


    

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
    
    .then(res =>{
        const {displayName, photoURL ,email} =res.user;
        const signInUser ={ name : displayName, email: email, photo: photoURL }
        setUser(signInUser);
        return res.user;


    } )
    .catch(err =>{
        console.log (err);
        setUser(null);
        return err.message;
    })
    }

    const signOut = () => {
        firebase.auth().signOut().then(function() {
            setUser(null);
          
          }).catch(function(error) {
            // An error happened.
          });
    }

    return {
        user,
        signInWithGoogle,
        signOut
    }
}

export default Auth;