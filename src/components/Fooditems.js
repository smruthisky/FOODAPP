import DisplayMenu from "./displayeachitem";
const Fooditems = ({ items }) => {
    // console.log(items[0].itemCards[0].card.info.id);
    // return null;
    return (
      <>
        {items.map((item, index) => (
          <DisplayMenu key={index} itemcards={item.itemCards}/>
          
        ))}
      </>
    );
  };
  export default Fooditems;
  