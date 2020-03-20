
import React from 'react';
import Auth from './UseAuth'

const Login = () => {

const auth =Auth();



    return (
        <div>
            <p>hay  i am log in</p>
            {
                auth.user ? <button onClick={auth.signOut}> Sign out </button> :
                <button onClick={auth.signInWithGoogle} >Sign In with Google</button>
                
                }
             
        </div>
    );
};

export default Login;