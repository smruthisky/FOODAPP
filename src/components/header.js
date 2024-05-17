import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo-no-background.png';
import {userContext} from "../utils/useContext";
import {  useSelector } from "react-redux";
import store from "../utils/store";

export const Title=() =>(
    <a href="/">
    <img className="h-14 ml-10  pt-2" alt="logo" src={logo}
    />
    </a>
);

const Header= ()=>
{

    const cartItems=useSelector(store=> store.cart.items);
     console.log(cartItems)
    const[isLoggedIn ,setLoggedIn]=useState(false);

    const {user}=useContext(userContext);

    return (

        <div className="header flex ml-9">
          <Title/>
          <h4 className="text-sm   pt-4 ml-7 font-bold text-orange-700"> {user.name}</h4>
           <div className=" pt-4 ml-96 justify-center ">
            <ul className="nav flex space-x-3 ">
             <li className="px-4 text-orange-700 hover:text-black font-semibold"><Link to="/">Home</Link></li>
             <li className="px-4 text-orange-700 hover:text-black font-semibold" ><Link to="/about">About us</Link></li>
             <li className="px-4  text-orange-700 hover:text-black font-semibold"><Link to="/contact">Contact</Link></li>
             <li className="px-4 text-orange-700 hover:text-black font-semibold">
                <Link to="/cart">Cart <span className="bg-orange-200 rounded-md ">{cartItems.length}</span></Link></li>
             <li className="px-6 text-orange-700 hover:text-black font-semibold"><Link to="/instamart">Instamart</Link></li>
            </ul>
           
           </div>
     
           {isLoggedIn ?(<button onClick={()=>setLoggedIn(false)}className="px-2 ml-24 text-orange-700  bg-orange-200 rounded-md h-9 mt-3 font-semibold hover:text-black">Logout</button>):
           
           (<button onClick={()=>setLoggedIn(true)} className="px-2 ml-24 text-orange-700  bg-orange-200 rounded-md h-9 mt-3 font-semibold hover:text-black">Login</button>)}
           
           
          
        </div>
    );
};
export default Header;