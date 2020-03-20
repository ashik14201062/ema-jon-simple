
import React from 'react';
import Auth from './UseAuth'

const Login = () => {

const auth =Auth();
const handelSignIn = () => {
    auth.signInWithGoogle()
    .then(res =>{
        window.location.pathname = '/review'
    })
}

 const handelSignOut = () => {
    auth.signOut()
    .then(res=>{

        window.location.pathname = '/';


    })
     
 }

    return (
        <div>
            <p>hay  i am log in</p>
            {
                auth.user ? <button onClick={handelSignOut}> Sign out </button> :
                <button onClick={handelSignIn} >Sign In with Google</button>
                
                }
             
        </div>
    );
};

export default Login;