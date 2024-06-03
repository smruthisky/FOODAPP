import { useParams } from "react-router-dom";


import useResturant from "../utils/useResturant";
import Menu from "./Menu";
import Menushimmer from "./Menushimmer";
const Resturantmenu=()=>{

    //how to read dynamic url params

     const {id}=useParams();
     const Resinfo=useResturant(id);
     //const {id}=useParams(); another way by destructuring
     
      
   
    return(!Resinfo)?(
        <div className="mt-4 bg-slate-100 pt-20">
        {Array(20).fill(null).map((e, index)=>(
            <Menushimmer key={index}/>
           ))} 
           </div>
    ):(
        <>
       
        
        <div data-testid="menu"className="bg-slate-100 " >
          
        <div className="flex pt-20  ">
        
            {/* <h1>Resturant id:{Resinfo.id}</h1> */}
            <div className="resinfo mt-5  ml-10 border rounded-md w-72 h-60  bg-white fixed right-0">
            
            <div className="resdata w-52  m-5 ">
            <h1 className="resname font-sans font-semibold text-xl text-orange-600">{Resinfo.name}</h1>
            <h3 className="address  text-orange-800 pt-9 font-bold text-lg">{Resinfo.areaName},{Resinfo.city}</h3>
            <h3 className="resrating  text-orange-800 pt-9 font-bold text-lg">{Resinfo.avgRating} stars</h3>
            </div>
          

            </div>
            

            <div  ><Menu/></div>
        </div>
      
        
        </div>
        </>
    );
};
export default Resturantmenu;