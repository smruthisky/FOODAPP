import { useState } from "react";
import { imgurl } from "../../contants";

const Cartdisplay=({itemcards})=>{
    const initialQuantities = {};
    itemcards.forEach(item => {
        initialQuantities[item.id] = item.quantity || 1;
    });

    const [quantities, setQuantities] = useState(initialQuantities);

    // Function to increase quantity
    const increaseQ = (item) => {
        const newQuantities = { ...quantities };
        newQuantities[item.id] = (quantities[item.id] || 1) + 1;
        setQuantities(newQuantities);
    };

    // Function to decrease quantity
    const decreaseQ = (item) => {
        const newQuantities = { ...quantities };
        newQuantities[item.id] = Math.max(1, (quantities[item.id] || 1) - 1);
        setQuantities(newQuantities);
    };

    // Calculate total price
    const calculateTotalPrice = () => {
        return itemcards.reduce((total, item) => {
            const price = item.price ? item.price / 100 : item.defaultPrice / 100;
            return total + (price * quantities[item.id]);
        }, 0).toFixed(2);
    };
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
                        
                <button className=" font-semibold m-1 " onClick={()=>decreaseQ(i)}>-</button><span className="font-bold text-green-700 m-2">{quantities[i.id]}</span>
                <button className=" font-semibold m-1 " onClick={()=>increaseQ(i)}>+</button>

                        
                    </div>
                </div>
                 

                </div>
      {/* <button className="w-32 mt-44 m-3 h-8 rounded-sm bg-orange-400 font-semibold text-white" onClick={()=>clearCart()}>ClearCart</button> */}
      
                </div>
               
                
                // </div>
                
  
             
         )
         
         
         }
          <div className="m-5 text-right font-bold text-lg">
                Total Price: ₹ {calculateTotalPrice()}
            </div>
        </>
 )
};
export default Cartdisplay;