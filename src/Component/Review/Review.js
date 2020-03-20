import React, { useEffect, useState } from 'react';
import {getDatabaseCart, processOrder} from  '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import {removeFromDatabaseCart} from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/UseAuth';


const Review = () => {



     const [cart ,setCart] =  useState([]);
     const [orderPlace , setOderPlace] =useState();
     const auth =useAuth();

     const handlePlaceOrdrt = ()=> {
         setCart([]);
         setOderPlace(true);
         processOrder();
 
     }

     const removeProduct =(productKey)=>{
         
         const newCart =cart.filter(pd => pd.key !== productKey);
         setCart(newCart);
         removeFromDatabaseCart(productKey);


     }
    useEffect(()=>{

        //cart
        const savedCart = getDatabaseCart();
        const productkeys = Object.keys(savedCart);
        const cartProducts = productkeys.map(key=> {

            const product =fakeData.find(pd=>pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
        

    } ,[])
     let thankYou ; 
     if(orderPlace )
     {
         thankYou= <img src={happyImage} alt=""/>}
    return (
        <div className="shop-container">
           
            <div className="product-container">

            {
                cart.map(pd => <ReviewItem product={pd}
                    key={pd.key}
                    removeProduct = {removeProduct}
                
                ></ReviewItem> )

               
            }
            {thankYou}
{

    !cart.length && <h1> Added  any thing  pleace <a href="/">keep shoping</a>  </h1>
}


            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <Link to ="/shipment">  
                    
                   { auth.user ?
                    <button  className="main-button" > Order </button>
                    :
                    <button  className="main-button" > Log in </button>
                    }
                    
                          </Link>
                   
                </Cart>

            </div>
            
          

        </div>
    );
};

export default Review;