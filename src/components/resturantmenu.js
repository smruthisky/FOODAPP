import { useParams } from "react-router-dom";

import Skeleton from "./shimmerui";

import { imgurl } from "../../contants";
import useResturant from "../utils/useResturant";
import Menu from "./Menu";
const Resturantmenu=()=>{

    //how to read dynamic url params

     const {id}=useParams();
     const Resinfo=useResturant(id);
     //const {id}=useParams(); another way by destructuring
     
      
   
    return(!Resinfo)?(<Skeleton/>):(
        <div>
            {/* <h1>Resturant id:{Resinfo.id}</h1> */}
            <div className="resinfo">
            <img className="resimg" src={imgurl+ Resinfo.cloudinaryImageId}/> 
            <div className="resdata">
            <h1 className="resname">{Resinfo.name}</h1>
            <h3 className="address">{Resinfo.areaName},{Resinfo.city}</h3>
            <h3 className="resrating">{Resinfo.avgRating} stars</h3>
            </div>
          

            </div>
            

           <div><Menu/></div>
        </div>
        
    );
};
export default Resturantmenu;