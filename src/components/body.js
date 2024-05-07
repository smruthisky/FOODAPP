import { itemlist } from "../../contants.js";
import Card from "./cards.js";
import { useEffect, useState  } from "react";
import Skeleton from "./shimmerui.js";
import { Link } from "react-router-dom";

 function filtersearch(searchInput,resturants){
      const filteredres=resturants.filter((resturant)=>
      
        resturant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())

      );
     
      return filteredres;

 };
 const Body=()=>{
    const [allresturants , setAllResturant]=useState("");
    const [filteredresturants , setFilteredResturant]=useState("");
    const [searchInput ,setSearchInput] =useState("");
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
    console.log("render");
     

    
    return allresturants.length ===0 ?( 
      <div className="allskeleton">
             {Array(20).fill(null).map((e, index)=>(
              <Skeleton key={index}/>
             ))} 
            
             
      </div>
  
    
        ) : ( 
        <>
          <div className="search-container"> 
            
                <input type="text" className="search-input" placeholder="Search" 
               value={searchInput}
                onChange={(e)=>{
               setSearchInput(e.target.value);
                 }}
              />
     <button className="search-btn " onClick={()=>{
        //need to filter data
        const data=filtersearch(searchInput , allresturants);
        //update the state variable
        setFilteredResturant(data);
     } }>Search</button>
     </div>   
      
      
  
    <div className="resturant-list">   
   
    {filteredresturants?.length === 0 ? (
        <h1>No restaurants match your filter</h1>
      ) : (
        filteredresturants.map((restaurant) => (

          <Link to = {"/resturant/"+ restaurant.info.id} key={restaurant.info.id} >
           <Card  {...restaurant.info} /> </Link>
        ))
      )}
    
  </div>
  </>
    );
};
export default Body;