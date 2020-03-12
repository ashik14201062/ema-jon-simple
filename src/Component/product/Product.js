import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {

    //console.log(props);


    const { img, name, seller, wholePrice, stock } = props.Product;
    return (
        <div className="product">

            <div className="">
                <img src={img} alt="" />

            </div>
            <div className="product-name">

                <h4>{name}</h4>
             
                <p><small>{seller}</small></p>
               
                <p><small>${wholePrice}</small></p>
               
                <p><small> Only <b>{stock}</b> left stock  oder soon</small></p>
                <button className="main-button"
                onClick = {()=>props.handelAddProduct(props.Product)}

               
                
                > <FontAwesomeIcon icon={faShoppingCart} /> Add to chart </button>
            </div>


        </div>
    );
};

export default Product;