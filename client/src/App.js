import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components/index";
import { Home, Calendar, Todo } from "./pages/index";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

    return (
        <div className={currentMode === 'Dark' ? 'dark font-display' : 'font-display'}>
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
                    <div
                        className={`dark:bg-main-dark bg-main min-h-screen w-full ${''
                            /*activeMenu ? "md:ml-72" : "flex-2"*/
                        }`}>
                        <div className="fixed md:static bg-main dark:bg-main-dark navbar w-full">
                            <Navbar />
                        </div>
                        <div>
                            {themeSettings && <ThemeSettings />}
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/todo" element={<Todo />} />
                                <Route
                                    path="/calendar"
                                    element={<Calendar />}
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
