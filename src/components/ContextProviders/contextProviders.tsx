"use client"

// React
import { ReactNode } from "react";

// Context
import { AppProvider } from "@/context/AppContext";
import { AuthProvider } from "@/context/AuthContext";

export default function ContextProviders( { children } : { children: ReactNode } ){
    return(
        <AuthProvider>
            <AppProvider>
                {children}
            </AppProvider>
        </AuthProvider>
    )
}