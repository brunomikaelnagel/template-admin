'use client'  

// React
import { createContext, useState, ReactNode, useContext } from "react";

// Types
import { TTheme, isTTheme } from "@/interface/theme";

export interface IAppContextProps {
    themeMode: TTheme
    toggleTheme: () => void
}

const AppContext = createContext({} as IAppContextProps)

export function AppProvider({children} : {children: ReactNode} ){

    function setThemeLocalStorage(theme: TTheme){
        localStorage.setItem("theme", theme)
    }

    function getThemeLocalStorage(defautlTheme: TTheme){
        const theme = localStorage.getItem("theme")
        if(isTTheme(theme)){
            return theme
        }else{
            setThemeLocalStorage(defautlTheme)
            return defautlTheme
        }
    }

    const [themeMode, setTheme] = useState<TTheme>(getThemeLocalStorage("light"))

    function toggleTheme(){
        if(themeMode === "dark"){
            setThemeLocalStorage("light")
            setTheme("light")
        }else{
            setThemeLocalStorage("dark")
            setTheme("dark")
        }
    }

    return (
        <AppContext.Provider value={{
            themeMode,
            toggleTheme
        }} >
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}

