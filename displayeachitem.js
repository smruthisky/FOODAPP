import { useDispatch ,useSelector} from "react-redux";
import { imgurl } from "../../contants";
import { addItem } from "../utils/cartslice";
import Popup from "reactjs-popup";
import { useState } from "react";
const DisplayMenu=({itemcards})=>{
    console.log(itemcards);
    // return null;
    const cartItems = useSelector((state) => state.cart.items);
    const [popupMessage, setPopupMessage] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [msgColor ,setmsgColor]=useState("white")
    const dispatch=useDispatch();
    const handleadditem=(item)=>{
        
       
        const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);
        if (isItemInCart) {
            setPopupMessage("Item already in the cart!");
            setmsgColor("red");
        } else {
            dispatch(addItem(item));
            setPopupMessage("Item added to the cart!");
            setmsgColor("green");
        }
        setIsPopupOpen(true);
        setTimeout(() => {
            setIsPopupOpen(false);
        }, 2000); 
        
    };
    
    return(
        <div >
         {itemcards.map((i,index)=>
      
             <div data-testid="menulist"  className="menu ml-[100px] bg-white m-4 h-44 flex w-[800px] shadow-md rounded-lg" key={i?.card?.info?.id}>
                <div className="text font-sans pl-5 mt-3 " >
                <div className="name font-bold text-lg text-orange-600">{i?.card?.info?.name}
                 
                </div>
                <p className="des w-[600px]  truncate ... text-sm pt-2 font-medium ">{i?.card?.info?.description}</p>
                <p className="price pt-3 font-semibold text-orange-600">₹ {(i?.card?.info?.price) ? ((i?.card?.info?.price) /100) :((i?.card?.info?.defaultPrice) /100)}</p>
                </div>
                <div className="flex-col ">
                    <div className="ml-7">
                    <img className="menuimage  mt-3 h-24 w-24 rounded-md  object-cover " src={imgurl+ i?.card?.info?.imageId}/> 
                    </div>
                
                <div className="mt-4">
                <Popup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} position=" center">
                                <div className="p-2  bg-green-400 shadow-sm rounded-md">
                                    <p className="text-white" style={{color : msgColor}}>{popupMessage}</p>
                                </div>
                            </Popup>
                <button data-testid="addbtn" className="bg-green-300 w-20 ml-[40px]  rounded-md  "
                     onClick={()=>handleadditem(item=i?.card?.info)}>
                        Add</button>
                </div>
                </div>
                  
             </div> 
             
         )
         
         
         }
         
        </div>
    );
};
export default DisplayMenu;