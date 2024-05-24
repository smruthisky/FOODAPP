import { render } from "@testing-library/react";
import Header from "../header";
import store from "../../utils/store";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server"


test("logo should load on rendering header",()=>{
    const header=render(
    <StaticRouter>
       <Provider store={store}>
        <Header/>
        </Provider>
    </StaticRouter>
    );
//  console.log(header);
 const logo=header.getAllByTestId("logo");
//  console.log(logo[0]);
 expect(logo[0].src).toBe("http://localhost/dummy.png");


});

test("check online status",()=>{
    const header=render(
    <StaticRouter>
       <Provider store={store}>
        <Header/>
        </Provider>
    </StaticRouter>
    );
//  console.log(header);
 const onlineStatus=header.getByTestId("online-status");
 console.log(onlineStatus.innerHTML);
 expect(onlineStatus.innerHTML).toBe("Online");


});

test("check initial cart is 0",()=>{
    const header=render(
    <StaticRouter>
       <Provider store={store}>
        <Header/>
        </Provider>
    </StaticRouter>
    );
//  console.log(header);
 const initialcart=header.getByTestId("initialcartvalue");
 console.log(initialcart.textContent);
 expect(initialcart.textContent).toBe("Cart 0");


});