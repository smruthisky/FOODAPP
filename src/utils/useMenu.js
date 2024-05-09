import { useState,useEffect } from "react";
import {link} from "../../contants";

const useMenu=(id)=>{
 
    const [Menu,setMenu]=useState(null);
    
    useEffect(()=>{
        getResturantmenu();

     },[]);
     
     async function getResturantmenu(){
       
        const data =await fetch( link+id);
        const json= await data.json();
        setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        
     }
     if (!Menu) {
        return null; // Return null if Menu is not yet loaded
    }
    //   console.log(Menu)
     const modifiedMenu = Menu.slice(2, Menu.length - 2);
    
    //  console.log(modifiedMenu)
    const itemsWithCards = modifiedMenu.filter(item => item?.card?.card?.itemCards);
    // console.log(itemsWithCards);
    const itemsCards = itemsWithCards.map(item => item.card.card);
    
    return itemsCards;
};
export default useMenu;