import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo-no-background.png';
const loggedInUser=()=>{

    return false;
};



export const Title=() =>(
    <a href="/">
    <img className="logo" src={logo}
    />
    </a>
);
const Header= ()=>
{

    const[isLoggedIn ,setLoggedIn]=useState(false);
    return (

        <div className="header">
          <Title/>
           <div className="nav-items">
            <ul className="nav">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About us</Link></li>
             <li><Link to="/contact">Contact</Link></li>
             <li><Link to="/cart">Cart</Link></li>
             <li><Link to="/instamart">Instamart</Link></li>
            </ul>
           
           </div>
           {isLoggedIn ?(<button onClick={()=>setLoggedIn(false)}>Logout</button>):
           
           (<button onClick={()=>setLoggedIn(true)}>Login</button>)}
           
           
          
        </div>
    );
};
export default Header;