import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import moment from "moment";
import CurrencyFormat from 'react-currency-format';
import './Order.css';

function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating} 
                hideButton
                />

            ))}
             <CurrencyFormat 
            renderText={(value) => (
                <h3 className="order_total">Order Total: {value}</h3>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandseparator={true}
            prefex={"$"}
            />
        </div>
    )
}

export default Order
