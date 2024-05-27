import { useDispatch } from "react-redux";
import { imgurl } from "../../contants";
import { addItem } from "../utils/cartslice";


const DisplayMenu=({itemcards})=>{
    console.log(itemcards);
    // return null;
    const dispatch=useDispatch();
    const handleadditem=(item)=>{
        dispatch(addItem(item));
        
    };
    
    return(
        <div >
         {itemcards.map((i,index)=>
      
             <div data-testid="menulist"  className="menu ml-[120px] bg-white m-4 h-44 flex w-[800px] shadow-md rounded-lg" key={i?.card?.info?.id}>
                <div className="text font-sans pl-5 mt-3 " >
                <div className="name font-bold text-lg text-orange-600">{i?.card?.info?.name}
                 
                </div>
                <p className="des w-[600px] text-sm pt-2 font-medium ">{i?.card?.info?.description}</p>
                <p className="price pt-3 font-semibold text-orange-600">₹ {(i?.card?.info?.price) ? ((i?.card?.info?.price) /100) :((i?.card?.info?.defaultPrice) /100)}</p>
                </div>
                <div className="flex-col ">
                    <div className="ml-7">
                    <img className="menuimage  mt-3 h-24 w-24 rounded-md  object-cover " src={imgurl+ i?.card?.info?.imageId}/> 
                    </div>
                
                <div className="mt-4">
                <button data-testid="addbtn" className="bg-green-300 w-20 ml-[40px]  rounded-md  " onClick={()=>handleadditem(item=i?.card?.info)}>Add</button>
                </div>
                 

                </div>
                  
             </div> 
             
         )
         
         
         }
         
        </div>
    );
};
export default DisplayMenu;