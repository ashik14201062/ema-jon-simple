import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';


const Product = (props) => {

    console.log(props);


    const { img, name, seller, wholePrice, stock ,key } = props.Product;
    return (
        <div className="product">

            <div className="">
                <img src={img} alt="" />

            </div>
            <div className="product-name">

                <h4><Link to ={'/product/'+ key}> {name}</Link> </h4>
             
                <p><small>{seller}</small></p>
               
                <p><small>${wholePrice}</small></p>
               
                <p><small> Only <b>{stock}</b> left stock  oder soon</small></p>
                {props.showAddToCart && <button className="main-button"
                onClick = {()=>props.handelAddProduct(props.Product)}

               
                
                > <FontAwesomeIcon icon={faShoppingCart} /> Add to chart </button>}
            </div>


        </div>
    );
};

export default Product;