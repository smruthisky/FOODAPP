import { imgurl } from "../../contants.js";
const Card=({cloudinaryImageId,name,cuisines,avgRating})=>{
    return(
        <div className="cards w-56 h-[350px] p-2 m-1  flex-col  bg-white shadow-lg rounded-md">
       <img className="w-48 h-52 pl-2 rounded-lg" src={imgurl+cloudinaryImageId}/>
        <div className="textcontent font-sans  ">
        <h2 className="resname font-bold text-lg pl-2 text-orange-700">{name} </h2>
        <h4 className="cuisines pl-2 text-sm text-orange-900">{cuisines.join(', ')}</h4>
        
        <h4 className="cardrating pl-2 text-orange-900 text-sm">{avgRating} stars</h4>
        </div>
    
        </div>
       
    );
};
export default Card;