import React from 'react';
import { useAuth } from '../Login/UseAuth';



const Cart = (props) => {
    const cart = props.cart ;
    const auth = useAuth()

    //const total = cart.reduce((total,prd)=> total + prd.price, 0)

    let total = 0;
    for (let i =0; i<cart.length ;i++){
        const product = cart[i];
        total = total + product.price * product.quantity  ;
    }

    let shipping = 0;
    if (total >125){
        shipping =0 ;
    }
    else if ( total >15){
        shipping =4.50;
    }
    else if (total>0){
        shipping =12.45;
    }
    
    const text = (total/10);

    const formatNumber = num => {
        const precision =num.toFixed(2);
        return Number (precision);
    }


    return (
        <div>
             <h4>order summary</h4>
    <p>Items        :{cart.length}</p>
    <p>Shaping cost : {shipping} </p>
    <p>text         : {formatNumber(text) } </p>
    <p> price       :  { formatNumber(total + shipping + text) }</p>

    {
        props.children
    }
 
    


        </div>
    );
};

export default Cart;