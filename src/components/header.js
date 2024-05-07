import { useState } from "react";
import { Link } from "react-router-dom";
const loggedInUser=()=>{

    return false;
};



export const Title=() =>(
    <a href="/">
    <img className="logo" src="https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png"
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
            <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About us</Link></li>
             <li><Link to="/contact">Contact</Link></li>
             <li><Link to="/cart">Cart</Link></li>
            </ul>
           
           </div>
           {isLoggedIn ?(<button onClick={()=>setLoggedIn(false)}>Logout</button>):
           
           (<button onClick={()=>setLoggedIn(true)}>Login</button>)}
           
           
          
        </div>
    );
};
export default Header;