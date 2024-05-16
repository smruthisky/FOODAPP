import { createContext } from "react";

export const userContext=createContext({
    user:{
        name: "smruthi",
        email:"smruthis3012@gmail.com"
        

}})
userContext.displayName="UserContext"
// export  const theme=createContext('light');
// import { createContext } from 'react';

export const ThemeContext = createContext('light');