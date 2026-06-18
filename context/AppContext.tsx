import React, { createContext, useContext, useState } from "react";

interface AppContextType{
    login: boolean |null;
}
const AppContext = createContext<AppContextType | null >(null);

export const AppContextProvider = ({children}:{children:React.ReactNode})=>{
    const [login, setLogin] = useState(false);
    return (
        <AppContext.Provider value={{login}}>{children}</AppContext.Provider>
    )
}


export const useAppContext = ()=>{
    const context = useContext(AppContext);
    if(!context){
        throw new Error("App must be inside AppContext Provider");
    }
    return context;
}