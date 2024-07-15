import React, { useEffect, useState, useCallback } from 'react';
import './Style/Cart.css';
import GooglePayButton from '@google-pay/button-react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = useCallback(() => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.amount;
    });
    setPrice(totalPrice);
  }, [cart]);

  useEffect(() => {
    handlePrice();
  }, [cart, handlePrice]);

  function handleRemove(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  function handleClearCart() {
    setCart([]);
  }

  return (
    <div className='cart'>
      <h2>Your Cart is Here</h2>
      {cart.length === 0 ? (
        <>
          <h3>Your cart is empty.</h3>
          <h3>Go to <Link to="/ecommercewebsite">Home Page</Link> and add items to your cart.</h3>
        </>
      ) : (
        <>
          <h3>Order Now</h3>
          <table width={'100%'} border={1}>
            <thead>
              <tr className='tr'>
                <td>Images</td>
                <td>Title</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Increment</td>
                <td>Decrement</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr className='tr' key={item.id}>
                  <td className='tdimg'><img src={item.image} alt='' height={'50px'} width={'50px'} /></td>
                  <td><b><span>Item Name: </span>{item.title}</b></td>
                  <td className='btns'><span>Price: </span>{item.price}</td>
                  <td className='quantity'><span className='btns1'>Quantity: </span>{item.amount}</td>
                  <td><button className='button' onClick={() => handleChange(item, 1)}>+</button></td>
                  <td><button className='button' onClick={() => handleChange(item, -1)} disabled={item.amount <= 0}>-</button></td>
                  <td className='btnr'><button className='button' onClick={() => handleRemove(item.id)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5}><b>Final Amount: ${price.toFixed(2)}</b></td>
                <td colSpan={7}>
                  <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                      apiVersion: 2,
                      apiVersionMinor: 0,
                      allowedPaymentMethods: [
                        {
                          type: 'CARD',
                          parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                          },
                          tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                              gateway: 'example',
                              gatewayMerchantId: 'exampleGatewayMerchantId',
                            },
                          },
                        },
                      ],
                      merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                      },
                      transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: price.toFixed(2),
                        currencyCode: 'USD',
                        countryCode: 'US',
                      },
                    }}
                    onLoadPaymentData={paymentRequest => {
                      console.log('load payment data', paymentRequest);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={7}>
                  <button className='button' onClick={handleClearCart}>Clear Cart</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      )}
    </div>
  );
};

export default Cart;
