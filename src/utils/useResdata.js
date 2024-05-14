import { useEffect, useState  } from "react";
const useResdata=()=>{
    const [allresturants , setAllResturant]=useState("");
    const [filteredresturants , setFilteredResturant]=useState("");
    
    

    useEffect(()=>{
     getResturants();
    },[])  ;
  
    async function getResturants(){
      try{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.039365&lng=80.2031976&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         if(!data)
         {
          throw new Error("Failed to fetch data");
         }
     
       const json= await data.json();
      
     const d=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
     if(!d){
      throw new Error("No restaurant data found");
     }
     console.log(d[0].info.id);
     setAllResturant(d);
     setFilteredResturant(d);
     
    }
    catch(error){
      console.error("Error fetching restaurant data:", error.message);
    }
    }
    const p=[allresturants,filteredresturants]
    return p;
        
    

};
export default useResdata;