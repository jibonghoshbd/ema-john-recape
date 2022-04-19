import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const { img, name, seller, price, stock } = props.product;
    return (

        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <p>By: {seller}</p>
                <p>Price: ${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button
                    onClick={() => props.addTorProduct(props.product)}
                    className='regural-btn'>add to setProducts</button>
            </div>
        </div>

    );
};

export default Product;