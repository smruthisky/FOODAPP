import { useDispatch, useSelector } from "react-redux";
import Cartdisplay from "./Cartdisplay";
import { clearCart  } from "../utils/cartslice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    
    return (
      <>
   
        <div className="bg-white border m-4 w-[560px] h-96 overflow-y-auto ">
            <div className="flex-col ">
                <Cartdisplay itemcards={cartItems}  />
                
            </div>
            
        </div>
        <button 
        className="w-32  m-3 h-8 rounded-sm bg-orange-400 font-semibold text-white" 
        onClick={()=>handleClearCart()}
    >
        ClearCart
    </button>
    </>
    );
};

export default Cart;
