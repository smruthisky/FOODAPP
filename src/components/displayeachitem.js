import { imgurl } from "../../contants";
const DisplayMenu=({itemcards})=>{
    // console.log(itemcards);
    // return null;
    
    return(
        <>
         {itemcards.map((i,index)=>
             <div className="menu ml-[170px] bg-white m-4 flex w-[900px] shadow-md rounded-lg" key={index}>
                <div className="text font-sans pl-5 " >
                <div className="name font-bold text-lg text-orange-600">{i.card.info.name}
                 
                </div>
                <p className="des w-[600px] text-sm pt-2 font-medium ">{i.card.info.description}</p>
                <p className="price pt-3 font-semibold text-orange-600">₹ {(i.card.info.price) ? ((i.card.info.price) /100) :((i.card.info.defaultPrice) /100)}</p>
                </div>
                  <img className="menuimage ml-[140px] rounded-md   w-32 m-1  " src={imgurl+ i.card.info.imageId}/> 

             </div> 
             
         )
         
         
         }
         
        </>
    );
};
export default DisplayMenu;