import {fireEvent,act, render,waitFor, getAllByAltText, getAllByTestId} from "@testing-library/react";
import '@testing-library/jest-dom/';

import Resturantmenu from "../../components/resturantmenu";
import Menu from "../../components/Menu"
// import Fooditems from "../Fooditems";
import DisplayMenu from "../../components/displayeachitem";
import { Provider } from "react-redux";
import store from "../../utils/store"
import { MENU_DATA } from "../../mocks/data";
import {StaticRouter} from "react-router-dom/server";
import Header from "../header";


global.fetch =jest.fn(()=>{
    return Promise.resolve(
         {
             json: ()=>{ return  Promise.resolve(MENU_DATA)},
         }
     );
  });
  test("to check shimmer in home page",  () => {
    
    const body= render(
        <StaticRouter>
            <Provider store={store}>
                <Menu />
            </Provider>
        </StaticRouter>
    );
   
     const shimmer =  body.getByTestId("shimmer");
     expect(shimmer).toBeInTheDocument();
    
}   
 
)
 test("add items to cart ", async()=>{

  const body= render(
    <StaticRouter>
        <Provider store={store}>
          <Header/>
            <Resturantmenu />
        </Provider>
    </StaticRouter>
)
await waitFor(()=>expect(body.getByTestId("menu"))) ;   
// const addButtons = getAllByTestId('addbtn');
const menulist=body.getByTestId("menu")
expect(menulist.children.length).toBe(2);
// Ensure there are "Add" buttons in the DOM
// expect(addButtons.length).toBeGreaterThan(0);
 })