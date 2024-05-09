import { imgurl } from "../../contants";
const DisplayMenu=({itemcards})=>{
    // console.log(itemcards);
    // return null;
    
    return(
        <>
         {itemcards.map((i,index)=>
             <div className="menu" key={index}>
                <div className="text" >
                <div className="name">{i.card.info.name}
                 
                </div>
                <p className="des">{i.card.info.description}</p>
                <p className="price">₹{(i.card.info.price) ? ((i.card.info.price) /100) :((i.card.info.defaultPrice) /100)}</p>
                </div>
                  <img className="menuimage" src={imgurl+ i.card.info.imageId}/> 

             </div> 
         )
         
         
         }
         
        </>
    );
};
export default DisplayMenu;