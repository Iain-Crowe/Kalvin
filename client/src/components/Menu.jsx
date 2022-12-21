import React from "react";
import { NavLink } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";

export const Menu = () => {
    const { activeMenu, setActiveMenu, currentColor } = useStateContext();

    const activeLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
    const normalLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

    const NavButtonText = ({ title, customFunc }) => (
        <NavLink
            to={`/${title}`}
            key={title}
            onClick={customFunc}
            style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
            })}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            <span className="pt-1 capitalize text-xl md:text-md font-semibold">
                {title}
            </span>
        </NavLink>
    );

    const closeMenu = () => {
        setActiveMenu(false);
    }

    return (
        <div className="h-screen overflow-auto pb-10">
            {activeMenu && (
                <>
                    <div className="flex- justify-between items-center mt-10">
                        <div className="flex-col gap-2">
                            <div className="flex">
                                <NavButtonText
                                    title="home"
                                    customFunc={closeMenu}
                                    color={currentColor}
                                />
                            </div>
                            <div className="flex">
                                <NavButtonText
                                    title="todo"
                                    customFunc={closeMenu}
                                    color={currentColor}
                                />
                            </div>
                            <div className="flex">
                                <NavButtonText
                                    title="calendar"
                                    customFunc={closeMenu}
                                    color={currentColor}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Menu;
