import { imgurl } from "../../contants";
import { clearCart } from "../utils/cartslice";
const Cartdisplay=({itemcards})=>{
    
 return(
    <>
         {itemcards.map((i)=>

                
                <div className="m-5 flex  " key={i.id}>
                
                <div className="text font-sans pl-5 mt-3 " >
                <div className="name font-bold text-lg w-64 text-orange-600">{i.name}
                 
                </div>
                {/* <p className="des w-[600px] text-sm pt-2 font-medium ">{i.description}</p> */}
                <p className="price pt-3 font-semibold w-44 text-orange-600">₹ {(i.price) ? ((i.price) /100) :((i.defaultPrice) /100)}</p>
                </div>
                <div className=" ">
                <img className="menuimage ml-14 rounded-md  w-20  h-20 " src={imgurl+ i.imageId}/> 
                <div className="mt-2">
                    <div className=" w-16 ml-16 border rounded-md ">
                <button className=" font-semibold m-1 " onClick={()=>increaseQ(item=i.info)}>-</button><span className="font-bold text-green-700 m-2">Q</span>
                <button className=" font-semibold m-1 " onClick={()=>decreaseQ(item=i.info)}>+</button>

                        
                    </div>
                </div>
                 

                </div>
      {/* <button className="w-32 mt-44 m-3 h-8 rounded-sm bg-orange-400 font-semibold text-white" onClick={()=>clearCart()}>ClearCart</button> */}

                </div>
                
                // </div>
                
  
             
         )
         
         
         }
         
        </>
 )
};
export default Cartdisplay;