import {fireEvent,act, render,waitFor} from "@testing-library/react";
import Resturantmenu from "../../components/resturantmenu";
// import Menu from "../../components/Menu"
// import Fooditems from "../Fooditems";
// import DisplayMenu from "../../components/displayeachitem";
import { Provider } from "react-redux";
import store from "../../utils/store"
import { MENU_DATA } from "../../mocks/data";
import {StaticRouter} from "react-router-dom/server";
import Header from "../header";
import {mockItemCards} from "../../mocks/itemcards"

global.fetch =jest.fn(()=>{
    return Promise.resolve(
         {
             json: ()=>{ return  Promise.resolve(MENU_DATA)},
         }
     );
  });
  test("to test if menu of resturants load as we choose the resturant", async () => {
    let body;
  
    await act(async () => {
      body = render(
        <StaticRouter>
          <Provider store={store}>
            <Header />
            <Resturantmenu itemcard={mockItemCards} />
          </Provider>
        </StaticRouter>
      );
    });
  
    await waitFor(() => expect(body.getByTestId("menulistt")) );
   
//   const menuList = body.getByTestId("menulist");
//   console.log(menuList.outerHTML);
//   const menuItems = menuList.children;

  // Assert the number of items in the menu list
//   console.log(menuItems.length);
//   expect(menuItems.length).toBe(MENU_DATA.length);

 
    // fireEvent.click(addbtn[1]);
    
    // const cart=body.getByTestId("cartitemsu");
    // expect(cart.textContent).toBe("1")
    
    // const reslist=body.getByTestId("res-list");
    // expect(reslist.children.length).toBe(2);
});