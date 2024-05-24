import { useEffect, useState } from "react";

const ProfileFunctionalComp=(props)=>{
    const [count ,setcount]=useState(0);
    useEffect(()=>{
      const timer=setInterval(()=>{
        console.log("hi");
      },1000);
      return ()=>{
         clearInterval(timer);
         console.log("useeffect return");
      };
    })
   return(
    <>
      <h1>Using functional component</h1>
      <h2>name:{props.name}</h2>
      <h3>count:{count}</h3>
      <button onClick={()=>{
            setcount(1)
      }}>click</button> 
        {/* here we cant give count=1 instead of setcount -> because react needs to keep track of count variable for reconciliation  process so we make it a state variable and use its function ,so whenever our state variable gets update reconcilian cycle gets triggered by react*/}
    </>
    
   );
};
export default ProfileFunctionalComp;