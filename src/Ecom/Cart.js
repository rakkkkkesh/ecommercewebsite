import React, { useEffect, useState, useCallback } from 'react'
import './Style/Cart.css'
import GooglePayButton from '@google-pay/button-react'

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0)

  const handlePrice = useCallback(() => {
    let ans = 0;
    cart.forEach((item) => (ans += item.price * item.amount));
    setPrice(ans);
  }, [cart]);

  useEffect(() => {
    handlePrice();
  }, [cart, handlePrice]);


  function handleRemove(id) {
    let arr = cart.filter((item) => item.id !== id)
    setCart(arr)
  }
  return (
    <div className='cart'>
      <h2>Your Cart is Here</h2>
      <h4>Order Now</h4>
      <table width={'100%'} border={1}>
        <thead>
          <tr className='tr'>
            <td>Images</td>
            <td>Title</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Increment</td>
            <td>Decrement</td>
            <td>Remove</td>
          </tr>
        </thead>
        {cart && cart.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td className='tdimg'><img src={item.image} alt='' height={'50px'} width={'50px'}></img></td>
                <td><b><span>Item Name: </span>{item.title}</b></td>
                <td className='btns'><span>Price: </span>{item.price}</td>
                <td><span className='btns1'>Quantity: </span>{item.amount}</td>
                <td><button className='button' onClick={() => handleChange(item, 1)}>+</button></td>
                <td><button className='button' onClick={() => handleChange(item, -1)} disabled={item.amount <= 0}>-</button></td>
                <td className='btnr'><button className='button' onClick={() => handleRemove(item.id)}>Remove</button></td>
              </tr>
            </tbody>
          )
        })}
        <tfoot>
          <tr>
            <td colSpan={5}><b>Final Amount : {price}</b></td>
            <td colSpan={7}><button>
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
                    totalPrice: '100.00',
                    currencyCode: 'USD',
                    countryCode: 'US',
                  },
                }}
                onLoadPaymentData={paymentRequest => {
                  console.log('load payment data', paymentRequest);
                }}
              />
            </button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default Cart
