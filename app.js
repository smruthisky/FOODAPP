import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./src/components/header.js";
import { Title } from "./src/components/header.js";
import Footer from "./src/components/Footer.js";
import Body from "./src/components/body.js";
import { createBrowserRouter ,RouterProvider ,Outlet } from "react-router-dom";
import About from "./src/components/About.js";
import Error from "./src/components/Error.js";
import Contact from "./src/components/contactus.js";
import Resturantmenu from "./src/components/resturantmenu.js";

//this app.js is a module not a normal js file so we need to specify that in script tag
// const heading1=React.createElement("h1" ,{
//         id:"title",
//         class:"class",
//         key:"h1"
        
//     },"Heading 1 from parcel");
//     const heading2 =React.createElement(
//         "h2" ,
//         {
//         id:"title",
//         key:"h2"
//     },
//     "Heading2"
//     );
//     const container=React.createElement(
//         "div",{
//         id:"container",
//     },
//     [heading1,heading2]
//     );

//config driven ui

    
//props
// const Card=(props)=>{
//     return(
//         <div className="cards">
//        <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.restaurant.info?.cloudinaryImageId}/>
//         <div className="textcontent">
//         <h2>{props.restaurant.info?.name} </h2>
//         <h3>{props.restaurant.info?.cuisines.join(',')}</h3>
        
//         <h4>{props.restaurant.info?.avgRating}stars</h4>
//         </div>
    
//         </div>
       
//     );
// };





const AppLayout=()=>{
    return(
        <>
         <Header/>
        <Outlet/>
        <Footer/>
        </>
       
    );
    
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/resturant/:id",
                element:<Resturantmenu/>
            }
        ]
    },
    

])

    const root=ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading1);
  
    root.render(<RouterProvider router={appRouter}/>);



    