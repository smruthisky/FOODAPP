import Fooditems from "./Fooditems";

import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import Menushimmer from "./Menushimmer";
const Menu=()=>{
    // const Menu=useMenu();
    
    const {id}=useParams();
    const itemsCards=useMenu(id);
    // console.log(itemsCards);
    if (itemsCards === null) {
        // return null; // or display a loading indicator
        return (<Menushimmer/>)
    }

    return (
        itemsCards.length > 0 ? <Fooditems items={itemsCards.map((item, index) => ({ ...item, key: index }))} />
        : null
    );
};
export default Menu;