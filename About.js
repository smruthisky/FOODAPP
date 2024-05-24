import { Outlet } from "react-router-dom";
import ProfileClasscomp from "./Profileclasscomp";
import ProfileFunctionalComp from "./Profile";
import { Component } from "react"; //sometimes they do this instead of using React.component

import {userContext} from "../utils/useContext";
class About extends Component{

   constructor(props){
         super(props);
          console.log("this is parent-constructor");
         
   }  
   componentDidMount(){
    console.log("this is parent-componentDidMount");
   }
   render(){
    console.log("this is parent-render")
    return(
      
      <div>
      <h1>HI This is about us</h1>
      {/* <Outlet/>  */}

      {/* here we are using Context as a component beacuse we dont have hooks in class based components  */}
      <userContext.Consumer > 
        {/* {(value)=>console.log(value)} */}
        {({user})=><h3 className="font-semibold pl-7">{user.name}- {user.email}</h3>}
      </userContext.Consumer>

      <ProfileFunctionalComp name={"smruthi"}/>
      <ProfileClasscomp name={"jenny"}/>
        </div>
       
      );
   }

}
export default About;

// const About1=()=>{
//     return(
      
//     <div>
//     <h1>HI This is about us</h1>
//     {/* <Outlet/>  */}
//     <ProfileFunctionalComp name={"smruthi"}/>
//     <ProfileClasscomp name={"jenny"}/>
//       </div>
     
//     );

// };//if you dont want to use outlet but you want to use profile component just import from profile.js and use
// export default About;