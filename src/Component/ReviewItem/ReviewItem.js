import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {

    const {name, quantity ,key,price} =props.product ;
    return (
        <div className="reviewItem">
            <h1 className="product-name" >Name : {name} </h1>
    <p>Quantity : {quantity}</p>
    <p><small>${price}</small></p>
    <br/>
    <button 
    className="main-button"
    onClick={()=>props.removeProduct(key)}
    >Remove</button>
        </div>
    );
};

export default ReviewItem;