import React, { lazy,Suspense } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./src/components/header.js";

import Body from "./src/components/body.js";
import { createBrowserRouter ,RouterProvider ,Outlet } from "react-router-dom";
import About from "./src/components/About.js";
import Error from "./src/components/Error.js";
import Contact from "./src/components/contactus.js";
import Resturantmenu from "./src/components/resturantmenu.js";
import Profile from "./src/components/Profile.js";
import Loading from "./src/components/Loading.js";
import Footer from "./src/components/Footer.js"
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



const Instamart= lazy(()=> import('./src/components/instamart.js'));

const AppLayout=()=>{
    //dont do lazy load inside any component like here , caz then again after each render it might load we dont want that
    
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
                children:[
                    {
                       path:"profile",  // i wont give / here , if i give it means to route from route ,but we want this profile to be another route in aboutus page 
                       element: <Profile/>  // for this i need to create outlet in its parent component , i.e in about.js
                    },

                ],
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
            },
            {
                path:"/instamart",
                element:<Suspense fallback={<Loading/>} ><Instamart/></Suspense>,
            }
        ]
    },
    

])
    const root=ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading1);
  
    root.render(<RouterProvider router={appRouter}/>);



    