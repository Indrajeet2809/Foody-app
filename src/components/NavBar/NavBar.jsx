import React, {useState, useContext} from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const NavBar = ({setShowLogin}) => {
  //  chnage menu to home if needed

  const [menu, setMenu]=useState("menu");

  const {getTotalCartAmount} = useContext(StoreContext);
  
  return (
    <div className='navbar'>
      <Link to ='/'><img src={assets.logo} alt="" className="logo" /></Link>
     <ul className ="navbar-menu">
      <Link to='/' onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>home</Link>
      <a href= "#footer" onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>mobile-app</a>
      <a href="#app-download" onClick={()=>setMenu("contact-us")} className={menu=="contact-us"?"active":""}>contact us</a>
      <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""}>menu</a>
     </ul>
     <div className="navbar-right">
        <img src={assets.search_icon} alt=""  />
        <div className="navbar-search-icon">
          <Link to ='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0? "": "dot" }></div>
          {/* <div className="dot"></div> */}
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default NavBar
