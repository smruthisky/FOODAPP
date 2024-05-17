
import { useDispatch, useSelector } from "react-redux";

import Cartdisplay from "./Cartdisplay";
import {clearCart} from "../utils/cartslice"
const Cart=()=>{
    const cartItems=useSelector((store)=> store.cart.items);
    console.log(cartItems);
    const dispatch=useDispatch();
    const clearCart=()=>{
          dispatch(clearCart());
    };
return(
   
    <div className="bg-white border m-4 w-[560px] h-60">
    <div className="flex-col">
    <Cartdisplay itemcards={cartItems}/>

      <button className="w-32 mt-44 m-3 h-8 rounded-sm bg-orange-400 font-semibold text-white" onClick={()=>clearCart()}>ClearCart</button>
    </div>
    
    </div>
)
};
export default Cart;