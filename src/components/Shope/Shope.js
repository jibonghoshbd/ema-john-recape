import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shope.css';

const Shope = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        const url = `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addTorProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)

    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h1 className='product-available'>Available Products: {products.length}</h1>
                <div>
                    {
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                            addTorProduct={addTorProduct}
                        ></Product>)
                    }
                </div>

            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shope;