import React from 'react';
import logo  from '../../images/logo.png'
import './Heder.css'
import { useAuth } from '../Login/UseAuth';


//import {useContext} from 'react'

const Heder = () => {

    const auth = useAuth();
  // console.log(auth.user);

    //const user =useContext(UserContext)
    return (
        <div className ="Header">
         <img src={logo} alt=""/>
         <nav>
             <a href="/shop">Shop</a>
             <a href="/review">Review</a>
             <a href="/manage">Manage Information</a>
            {
                auth.user && <span style ={{color:'yellow'}}> {auth.user.name} </span>
            
            }
            {
                auth.user ?  <a href="/login">Sign out </a> :  <a href="/login">Sign in </a>    

            }
        
    }
    
    
         </nav>
        </div>
    );
};

export default Heder;