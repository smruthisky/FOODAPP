import {link} from "../../contants";
import Resturantmenu from "../components/resturantmenu";
import { useEffect,useState } from "react";
const useResturant=(resId)=>{
    const [Resinfo ,setResinfo]=useState(null);
    useEffect(()=>{
        getResturantmenu();

     },[]);
     
     async function getResturantmenu(){
       
        const data =await fetch( link+resId);
        const json= await data.json();
     
        setResinfo(json?.data?.cards[2]?.card?.card?.info);
        
        // console.log(Resinfo);
        //  console.log(Menu);
        // console.log(restaurant)
        
     }
      return Resinfo;


};
export default useResturant;