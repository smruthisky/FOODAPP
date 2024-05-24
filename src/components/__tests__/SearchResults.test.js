import { render ,act,waitFor,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../body";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import store from "../../utils/store";
import {resdata} from "../../mocks/data";

global.fetch =jest.fn(()=>{
   return Promise.resolve(
        {
            json: ()=>{ return  Promise.resolve(resdata)},
        }
    );
 });
 test("to check shimmer in home page",  () => {
    
        const body= render(
            <StaticRouter>
                <Provider store={store}>
                    <Body />
                </Provider>
            </StaticRouter>
        );
        // console.log(body);
         const shimmer =  body.getByTestId("shimmer");
         expect(shimmer.children.length).toBe(20);
        // console.log(shimmer.children.length);
    }   
     
    )

    test("to check Resturants should load in  home page",  async () => {
    
        const body= render(
            <StaticRouter>
                <Provider store={store}>
                    <Body />
                </Provider>
            </StaticRouter>
        );
       
     
        
        await waitFor(()=>expect(body.getByTestId("search-btn")));
       const reslist=body.getByTestId("res-list");
       expect(reslist.children.length).toBe(20);
    }   
     
    )


