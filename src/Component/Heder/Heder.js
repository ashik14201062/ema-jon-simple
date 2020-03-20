import React from 'react';
import logo  from '../../images/logo.png'
import './Heder.css'

//import {useContext} from 'react'

const Heder = () => {

    //const user =useContext(UserContext)
    return (
        <div className ="Header">
         <img src={logo} alt=""/>
         <nav>
             <a href="/shop">Shop</a>
             <a href="/review">Review</a>
             <a href="/manage">Manage Information</a>
    <span style={{color:'yellow'}}></span>
         </nav>
        </div>
    );
};

export default Heder;