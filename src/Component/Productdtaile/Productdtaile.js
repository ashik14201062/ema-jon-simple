import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../product/Product';

const Productdtaile = () => {
    const {productkey} =useParams();
    const product = fakeData.find(pd=>pd.key=== productkey);
    console.log(product);

    return (
        <div>
       
            <h1> {productkey}</h1>
            <Product showAddToCart={false} Product={product} ></Product>
           
        </div>
    );
};

export default Productdtaile;