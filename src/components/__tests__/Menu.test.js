import {render} from "@testing-library/react";
import Body from "../body";
test("to test if menu of resturants load as we choose the resturant",()=>{
    const body=render(
        <Provider>
           <Body/>
        </Provider>
       
    )
})