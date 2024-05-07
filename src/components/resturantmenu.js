import { useParams } from "react-router-dom";
import { useEffect ,useState } from "react";
import Skeleton from "./shimmerui";
import Fooditems from "./Fooditems";
const Resturantmenu=()=>{
    const [Resinfo ,setResinfo]=useState(null);
    const [Menu,setMenu]=useState(null);
    useEffect(()=>{
        getResturantmenu();

     },[]);
    //how to read dynamic url params

     const {id}=useParams();
     //const {id}=useParams(); another way by destructuring
     const link="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+id;
     

     async function getResturantmenu(){
       
        const data =await fetch( link);
        const json= await data.json();
        setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        setResinfo(json?.data?.cards[2]?.card?.card?.info);
        
        // console.log(Resinfo);
        //  console.log(Menu);
        // console.log(restaurant)
     }

     const displayMenu = () => {
        const modifiedMenu = Menu.slice(2, Menu.length - 2);
        const itemsWithCards = modifiedMenu.filter(item => item?.card?.card?.itemCards);
        const itemsCards = itemsWithCards.map(item => item.card.card);
        console.log(itemsCards);
        return <Fooditems items={itemsCards} />;
        
    };
    
   
   
    return(!Resinfo)?(<Skeleton/>):(
        <div>
            <h1>Resturant id:{Resinfo.id}</h1>
            <h1>{Resinfo.name}</h1>
            <h3>{Resinfo.areaName},{Resinfo.city}</h3>
            <h3>{Resinfo.avgRating} stars</h3>

           <div>{displayMenu()}</div>
        </div>
        
    );
};
export default Resturantmenu;