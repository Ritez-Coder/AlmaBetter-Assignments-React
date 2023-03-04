import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import "./Style.css"
import { AppContext } from '../App'
function Navbar() {
     const { signed } = useContext(AppContext)
     console.log(signed, 12);
     return (
          <div className='navbar'>
               {/* logo container */}
               <div className="logo-div">
                    <h1 className='brand-name'>Fashiop</h1>
               </div>
               {/* nav container */}
               <nav className='navs'>

                    <NavLink to={"/"} className={"navlink"}  >Home</NavLink>
                    <NavLink to={"/shop"} className={"navlink"}  >Shop</NavLink>
                    <NavLink to={"/signpage"} className={"navlink"} >Login/Signup</NavLink>
                    {
                         signed ?
                              <div>

                                   <NavLink to={"/cart"} className={"navlink"}  >Cart</NavLink>
                                   <NavLink to={"/wishlist"} className={"navlink"}  >Wishlist</NavLink>
                                   <NavLink to={"/profile"} className={"navlink"}  >Profile</NavLink>

                              </div>
                              : ""
                    }

                    <NavLink to={"/logout"} className={"navlink"}>Logout</NavLink>
               </nav>
          </div>
     )
}

export default Navbar
