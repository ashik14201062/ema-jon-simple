import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react'
import './Shop.css'
import Product from '../product/Product';
import Cart from '../Cart/Cart'
import { addToDatabaseCart } from '../../utilities/databaseManager';
import {useEffect} from 'react';
import {getDatabaseCart}from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {
    const First10 = fakeData.slice(0,15);
   const [products , setProduct] = useState(First10);
   const [cart ,setCart ]= useState([]);

    useEffect(()=>{

        
        const savedCart = getDatabaseCart();
        const productkeys = Object.keys(savedCart);
        const cartProducts = productkeys.map(key=> {

            const product =fakeData.find(pd=>pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
        

    } ,[])
   const handelAddProduct =(product)=>{
       const toBeAddedKey = product.key
       
    


   
    const sameProduct =cart.find(pd=>pd.key === toBeAddedKey);
    let count =1;
    let newCart ;

    if(sameProduct)
     {count = sameProduct.quantity +1;
     sameProduct.quantity =count;
     const other =cart.filter(pd=>pd.key !== toBeAddedKey);
     newCart =[...other ,sameProduct];
    }
    else {
        product.quantity =1;
        newCart =[...cart,product];
    }
     

    setCart(newCart);
    
    addToDatabaseCart(product.key,count);
     
   }

    
    return (
        <div className ="shop-container">

            <div className="product-container">
           
                {
                    products.map(pd => <Product
                    key = {pd.key}
                    showAddToCart={true}
                        handelAddProduct ={handelAddProduct}
                        Product ={pd}></Product>)
                }

          

    


            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to='/review'>
                                 <button className="main-button"> Conform</button>
                </Link>

                </Cart>
               
                        
            </div>
            
            
           
        </div>
    );
};

export default Shop;