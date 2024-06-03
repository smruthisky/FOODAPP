import { itemlist } from "../../contants.js";
import Card from "./cards.js";
import { useContext, useEffect, useState,  } from "react";
import Skeleton from "./shimmerui.js";
import { Link } from "react-router-dom";
import { filtersearch } from "../utils/helper.js";
import useOnline from "../utils/useOnline.js";
import {userContext} from "../utils/useContext.js";
 const Body=()=>{
    const [allresturants , setAllResturant]=useState("");
    const [filteredresturants , setFilteredResturant]=useState("");
    const [searchInput ,setSearchInput] =useState("");
    
    const {user,setUser}=useContext(userContext);

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
    const isOnline =useOnline();

    if(!isOnline){
      return ( <h1>You are offline check your internet!</h1>)

    }
    // console.log("render");
     

    
    return allresturants.length ===0 ?( 

      <div data-testid="shimmer" className="allskeleton  flex flex-wrap ml-8 mt-4 mr-2 pt-28" >
             {Array(20).fill(null).map((e, index)=>(
              <Skeleton key={index}/>
             ))} 
            
             
      </div>
  
    
        ) : ( 
        <>
        <div className="body h-[1750px] mt-2 bg-gray-100 pt-16 ">
        <div className="search-container pt-5"> 
            
            <input type="text" data-testid="searchbar" className="search-input ml-40 pl-2 text-gray-700 bg-slate-200 rounded-lg h-12 w-52" placeholder="Type something to search.." 
           value={searchInput}
            onChange={(e)=>{
           setSearchInput(e.target.value);
             }}
          />
          
          {/* <input type="text" value={user.name} className="border ml-2"
           onChange={(e)=>{setUser({

            name:e.target.value,
          });
            
           }}
          />
            <input type="text" value={user.email} className="border ml-2"
           onChange={(e)=>{setUser({

            email:e.target.value, 
          });
            
           }}
           placeholder="Enter mailid"
          /> */}
 <button data-testid="search-btn" className="search-btn px-4 bg-orange-200 rounded-md ml-3 h-9 text-orange-800 hover:text-black font-semibold" onClick={()=>{
    //need to filter data
    const data=filtersearch(searchInput , allresturants);
    //update the state variable
    setFilteredResturant(data);
 } }>Search</button>
 </div>   
  
  

<div className="resturant-list   mt-3   ml-8   flex flex-wrap" data-testid="res-list">   

{filteredresturants?.length === 0 ? (
    <h1>No restaurants match your filter</h1>
  ) : (
    filteredresturants.map((restaurant) => (

      <Link to = {"/resturant/"+ restaurant.info.id} key={restaurant.info.id} >
       <Card  {...restaurant.info} /> </Link>
    ))
  )}

</div>
        </div>
         
  </>
    );
};
export default Body;