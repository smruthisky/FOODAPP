import DisplayMenu from "./displayeachitem";
const Fooditems = ({ items }) => {
    console.log(items);
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
  