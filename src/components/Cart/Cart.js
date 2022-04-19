import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    const total = cart.reduce((previous, product) => (previous + product.price), 0)

    let shippingCost;
    if (total === 0) {
        shippingCost = 0;
    } else {
        shippingCost = 15;
    }
    const tax = (total + shippingCost) / 100;
    const totalOrder = total + tax + shippingCost;

    return (
        <div className='cart'>
            <div className='cart-title'>
                <h2>Order Summary</h2>
                <h4>Items Ordered: {props.cart.length}</h4>
            </div>
            <div>
                <p>Items Price: ${total.toFixed(2)}</p>
                <p>Shipping Cost: ${shippingCost.toFixed(2)}</p>
                <p>Tex Amount: ${tax.toFixed(2)}</p>
                <h3 className='order-total'>Total Order: ${totalOrder.toFixed(2)}</h3>
            </div>
            <div className='btn'>
                <button className="regural-btn">Review your order</button>
            </div>
        </div>
    );
};

export default Cart;