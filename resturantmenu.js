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
        <div data-testid="menu">
        <div className="bg-slate-100 flex ">
            {/* <h1>Resturant id:{Resinfo.id}</h1> */}
            <div className="resinfo mt-5  ml-10 ">
            <img className="resimg w-52 rounded-sm" src={imgurl+ Resinfo.cloudinaryImageId}/> 
            <div className="resdata w-52   ">
            <h1 className="resname font-sans font-semibold text-xl text-orange-600">{Resinfo.name}</h1>
            <h3 className="address  text-orange-800 pt-9 font-bold text-lg">{Resinfo.areaName},{Resinfo.city}</h3>
            <h3 className="resrating  text-orange-800 pt-9 font-bold text-lg">{Resinfo.avgRating} stars</h3>
            </div>
          

            </div>
            

           
        </div>
      
        <div  ><Menu/></div>
        </div>
        
    );
};
export default Resturantmenu;