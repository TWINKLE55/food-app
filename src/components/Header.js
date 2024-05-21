import { useState,useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"
import {  useSelector } from "react-redux";

const Header = () => {
  const [btnName,setBtnName]=useState("login")
  const status=useOnlineStatus();
  const {loggedin}=useContext(UserContext)
  // console.log(typeof(loggedin))
  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems)
  
    return (
      <div className="header  ">
        <div className="logo  ">
          <img src={LOGO_URL} className="mr-80" />
        </div>
        
        <input type="checkbox" id="click"></input>
        <label htmlFor="click" className="menu-btn">
          <i className="fa-solid fa-bars "></i>
        </label>
        
  
        <div className="nav-items">
          <ul>
            
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/About">About Us</Link></li>
            <li><Link className="link" to="/Contact">Contact Us</Link></li>
            {/* <li><Link className="link" >User:{loggedin}</Link></li> */}

            <li>status:{status?"💚":"💖"}</li>
            <li><Link className="link" to="/cart"><i className="fa-solid fa-cart-shopping"></i><sup className="bg-[#681a7e] rounded-full text-white px-1">{cartItems.length}</sup></Link></li>

            <button className="login" onClick={()=>{if(btnName==="login") { setBtnName("Twinkle")}else if(btnName==="Twinkle"){setBtnName("logOut")}else if(btnName==="logOut"){setBtnName("login")}
          }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;