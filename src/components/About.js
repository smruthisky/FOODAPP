import { Outlet } from "react-router-dom";
import ProfileClasscomp from "./Profileclasscomp";
import ProfileFunctionalComp from "./Profile";
const About=()=>{
    return(
      
    <div>
    <h1>HI This is about us</h1>
    {/* <Outlet/>  */}
    <ProfileFunctionalComp name={"smruthi"}/>
    <ProfileClasscomp name={"jenny"}/>
      </div>
     
    );

};//if you dont want to use outlet but you want to use profile component just import from profile.js and use
export default About;