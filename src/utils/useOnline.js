import { useEffect, useState } from "react";

const useOnline=()=>{
  const [isOnline ,setisOnline]=useState(true);  
  
  useEffect(()=>{
    const handleOnline=()=>{
        setisOnline(true);
    }
    const handleOffline=()=>{
        setisOnline(false);
    }
    window.addEventListener("online",handleOnline);
    window.addEventListener("offline",handleOffline);
    //i need to remove the event listener from cache -> so we have to unmount is using return statement 
    return()=>{
        window.removeEventListener("online",handleOnline);
        window.removeEventListener("offline",handleOffline);
    
    }
    
  },[])
  return isOnline;
};
export default useOnline;