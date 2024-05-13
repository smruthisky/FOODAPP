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
        <div className="bg-slate-100">
            {/* <h1>Resturant id:{Resinfo.id}</h1> */}
            <div className="resinfo flex ml-60 ">
            <img className="resimg w-52 rounded-sm" src={imgurl+ Resinfo.cloudinaryImageId}/> 
            <div className="resdata ml-5   ">
            <h1 className="resname font-sans font-semibold text-4xl text-orange-600">{Resinfo.name}</h1>
            <h3 className="address  text-orange-800 pt-9 font-bold text-lg">{Resinfo.areaName},{Resinfo.city}</h3>
            <h3 className="resrating  text-orange-800 pt-9 font-bold text-lg">{Resinfo.avgRating} stars</h3>
            </div>
          

            </div>
            

           <div><Menu/></div>
        </div>
        
    );
};
export default Resturantmenu;