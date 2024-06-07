'use client';
import React from "react";
import { createContext } from "react";

export const ThemeContext = createContext("");
export default function ThemeProvider({children}){
    return <ThemeContext.Provider>
        {children}
    </ThemeContext.Provider>
}