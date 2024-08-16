import { createContext, useState } from "react";

export const ExampleContext=createContext()
export const ExampleProvider=({children})=>{
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    const [Userdetails, setUserdetails] = useState([]);
    return(
        <ExampleContext.Provider value={{IsLoggedIn,setIsLoggedIn,Userdetails,setUserdetails}}>
            {children}
        </ExampleContext.Provider>
    )
}