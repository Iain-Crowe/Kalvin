import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    add: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [smallNav, setSmallNav] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("#871C2A");
    const [currentMode, setCurrentMode] = useState('Dark');
    const [themeSettings, setThemeSettings] = useState(false);
    const [auth, setAuth] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem("themeMode", e.target.value);
        setThemeSettings(false);
    };

    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem("colorMode", color);
        setThemeSettings(false);
    };

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    };

    return (
        <StateContext.Provider
            value={{
                activeMenu, 
                setActiveMenu,
                smallNav,
                setSmallNav,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setCurrentColor,
                setCurrentMode,
                themeSettings,
                setThemeSettings,
                setColor,
                setMode,
                auth,
                setAuth
            }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
