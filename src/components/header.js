import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo-no-background.png';


export const Title=() =>(
    <a href="/">
    <img className="h-14 pl-11 pt-2" alt="logo" src={logo}
    />
    </a>
);

const Header= ()=>
{

    const[isLoggedIn ,setLoggedIn]=useState(false);
    return (

        <div className="header flex ml-9">
          <Title/>
           <div className=" pt-4 ml-96 justify-center ">
            <ul className="nav flex space-x-3 ">
             <li className="px-4 text-orange-700 hover:text-black font-semibold"><Link to="/">Home</Link></li>
             <li className="px-4 text-orange-700 hover:text-black font-semibold" ><Link to="/about">About us</Link></li>
             <li className="px-4  text-orange-700 hover:text-black font-semibold"><Link to="/contact">Contact</Link></li>
             <li className="px-4 text-orange-700 hover:text-black font-semibold"><Link to="/cart">Cart</Link></li>
             <li className="px-4 text-orange-700 hover:text-black font-semibold"><Link to="/instamart">Instamart</Link></li>
            </ul>
           
           </div>
           {isLoggedIn ?(<button onClick={()=>setLoggedIn(false)}>Logout</button>):
           
           (<button onClick={()=>setLoggedIn(true)} className="px-4 ml-32 text-orange-700  bg-orange-200 rounded-md h-9 mt-3 font-semibold hover:text-black">Login</button>)}
           
           
          
        </div>
    );
};
export default Header;