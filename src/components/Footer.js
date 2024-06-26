import { useContext } from "react";
import {userContext} from "../utils/useContext";
import { ThemeContext } from "../utils/useContext";



const Footer=()=>{
    const {user}=useContext(userContext);
    const theme=useContext(ThemeContext);
    return(
        <div className="bg-green-300  bottom-0 ">
        <h3 className="font-semibold ml-20 ">This website is created by {user.email}</h3>
             <h1 className="font-extrabold pl-6">{theme}</h1>
        </div>
    
    );
};
export default Footer; 