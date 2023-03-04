import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Container/Cart'
import Profile from '../Container/Profile'
import Wishlist from '../Container/Wishlist'
import Shop from '../Container/Shop'
import ProductDetail from '../Container/ProductDetail'
import Home from '../Container/Home'

function Routex() {
     return (
          <div>
               <Routes>
                    <Route path={"/"} >
                         <Route index element={<Home />} />
                         <Route path='/shop/:id' element={<ProductDetail />} />
                         <Route path={"/shop"} element={<Shop />} />
                         <Route path={"/cart"} element={<Cart />} />
                         <Route path={"/wishlist"} element={<Wishlist />} />
                         <Route path={"/profile"} element={<Profile />} />
                    </Route>
               </Routes>
          </div>
     )
}

export default Routex
