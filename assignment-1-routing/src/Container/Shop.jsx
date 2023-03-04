import React, { useContext, useState } from 'react'
import { AppContext } from '../App'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Style.css"
import { useNavigate } from 'react-router-dom';
function Shop() {
     const { products, setCart, cart } = useContext(AppContext);
     return (
          products &&
          <div className='container'>
               <div className='card-container'>
                    {
                         products.map((product, index) => {
                              return <Product index={index} product={product} />
                         })
                    }
               </div>
          </div>
     )
}

export default Shop

function Product({ product, index }) {
     const { setCart, cart, products } = useContext(AppContext);
     const navigate = useNavigate();
     const [isInCart, setIsInCart] = useState();
     // add cart event function
     const addToCart = (ind) => {
          const item = products.find((item, index) => {
               return index === ind;
          })
          setCart(state => {
               return [...state, item]
          })
          console.log(cart)
     }
     return <div class="card" >
          <div><AiOutlineHeart /></div>
          <div><AiFillHeart /></div>
          <div className='item'>
               <img onClick={() => {
                    navigate(`/shop/${product.id}`)
               }} className='item-image' src={product.thumbnail} alt="" height={'80px'} />
               <p className='title'> {product.title}</p>
               <p className='price'> Price : ${product.price}</p>
               <button className='cart-btn' onClick={() => {
                    addToCart(index)
               }} >Add to cart</button>
          </div>
     </div>
}