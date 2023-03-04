import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
function Cart() {
     const { cart } = useContext(AppContext);
     return (
          cart &&
          <div className='cart-card-container'>
               {
                    cart.map((product, index) => {
                         return <div className='cart-card'>
                              <div className='cart-card-item'>
                                   <img src={product.thumbnail} width={"200px"} alt="" />
                                   <p>{product.title}</p>

                              </div>
                         </div>
                    })
               }
          </div>
     )
}

export default Cart
