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

});