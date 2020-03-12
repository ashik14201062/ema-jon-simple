import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react'
import './Shop.css'
import Product from '../product/Product';
import Cart from '../Cart/Cart'


const Shop = () => {
    const First10 = fakeData.slice(0,15);
   const [products , setProduct] = useState(First10);
   const [cart ,setCart ]= useState([]);

   const handelAddProduct =(product)=>{
       
    
console.log('click',product);

    const newCart = [...cart,product];
    setCart(newCart);
     
   }

    
    return (
        <div className ="shop-container">

            <div className="product-container">
           
                {
                    products.map(pd => <Product
                        handelAddProduct ={handelAddProduct}
                        Product ={pd}></Product>)
                }

          

    


            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
               
                        
            </div>
            
            
           
        </div>
    );
};

export default Shop;