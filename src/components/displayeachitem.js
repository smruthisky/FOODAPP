import { imgurl } from "../../contants";
const DisplayMenu=({itemcards})=>{
    console.log(itemcards);
    // return null;
    return(
        <>
         {itemcards.map(i=>
             <div className="menu">
                <div className="text" >
                <div className="name">{i.card.info.name}
                
                <p className="price">₹{(i.card.info.price)/100}</p>
                </div>
                </div>
                  <img className="menuimage" src={imgurl+ i.card.info.imageId}/> 
                  
             </div> 
         )
         
         
         }
         
        </>
    );
};
export default DisplayMenu;