import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, ThemeSettings, Menu } from "./components/index";
import { Home, Calendar, Todo, Login, Register } from "./pages/index";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";
import PrivateComponent from "./components/PrivateComponent";

const App = () => {
    const {
        activeMenu,
        themeSettings,
        setThemeSettings,
        currentColor,
        currentMode,
    } = useStateContext();

    const auth = localStorage.getItem("user_data");

    return (
        <div
            className={
                currentMode === "Dark" ? "dark font-display" : "font-display"
            }>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark">
                    <div
                        className="fixed right-4 bottom-4"
                        style={{ zIndex: "1000" }}>
                        <TooltipComponent
                            content="Settings"
                            position="TopCenter">
                            <button
                                type="button"
                                className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                                style={{
                                    background: currentColor,
                                    borderRadius: "50%",
                                }}
                                onClick={() => setThemeSettings(true)}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed menu bg-main dark:bg-main-dark">
                            <Menu />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-main-dark">
                            <Menu />
                        </div>
                    )}
                    <div
                        className={`dark:bg-main-dark bg-main min-h-screen w-full`}>
                        <div className="fixed md:static bg-main dark:bg-main-dark navbar w-full">
                            <Navbar />
                        </div>
                        <div>
                            {themeSettings && <ThemeSettings />}
                            <Routes>
                                <Route element={<PrivateComponent />}>
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/todo" element={<Todo />} />
                                    <Route
                                        path="/calendar"
                                        element={<Calendar />}
                                    />
                                </Route>
                                <Route path="/" element={<Login />} />
                                <Route
                                    path="/register"
                                    element={<Register />}
                                />
                                <Route
                                    path="*"
                                    element={
                                        <div className="flex-row text-center mt-32">
                                            <h1 className="text-3xl text-black dark:text-white">
                                                404 Error
                                            </h1>
                                            <h2 className="text-black dark:text-white">
                                                Page not Found
                                            </h2>
                                        </div>
                                    }
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
