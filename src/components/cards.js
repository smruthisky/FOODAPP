import { imgurl } from "../../contants.js";
const Card=({cloudinaryImageId,name,cuisines,avgRating})=>{
    return(
        <div className="cards">
       <img  src={imgurl+cloudinaryImageId}/>
        <div className="textcontent">
        <h2 className="resname">{name} </h2>
        <h4 className="cuisines">{cuisines.join(', ')}</h4>
        
        <h4 className="cardrating">{avgRating} stars</h4>
        </div>
    
        </div>
       
    );
};
export default Card;