import React, { useState, useEffect } from "react";

import { AiOutlineMenu, AiOutlinePlusCircle } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import icon from "../data/icon-owl.png";
import { Add, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const {
        smallNav,
        setSmallNav,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        auth,
    } = useStateContext();

    function getUserInitials() {
        if (!auth) return "?";
        const ud = localStorage.getItem("user_data");
        console.log(ud);
        var json = JSON.parse(ud);
        var fi = json.user.firstName.charAt(0);
        var li = json.user.lastName.charAt(0);
        return "" + fi + li;
    }

    const activeLink = "flex items-center px-3 rounded-lg text-white text-md";
    const normalLink =
        "flex items-center px-3 rounded-lg text-white text-md hover:bg-gray-400/50 hover:rounded-lg";

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

    const NavButtonIcon = ({ title, customFunc, icon, color, dotColor }) => (
        <TooltipComponent content={title} position="BottomCenter">
            <button
                type="button"
                onClick={customFunc}
                style={{ color }}
                className="relative text-xl rounded-full p-3 hover:bg-gray-400/50">
                <span
                    style={{ background: dotColor }}
                    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
                />
                {icon}
            </button>
        </TooltipComponent>
    );

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setSmallNav(true);
        } else {
            setSmallNav(false);
        }
    }, [screenSize]);

    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <>
            {smallNav ? (
                <div className="flex justify-between p-2 relative bg-secondary dark:bg-secondary-dark drop-shadow-lg font-display">
                    <TooltipComponent content="Menu" position="BottomCenter">
                        <div
                            onClick={() => {setActiveMenu(true); console.log(activeMenu)}}
                            className="flex cursor-pointer items-center p-2 hover:bg-gray-400/50 rounded-lg mt-1">
                            <AiOutlineMenu className="text-gray-400 text-lg" />
                        </div>
                    </TooltipComponent>
                    <div className="flex justify-center w-[275px]">
                        <Link
                            to={auth ? "/home" : "/"}
                            className="items-center ml-2 flex text-2xl font-extrabold text-white">
                            <img className="h-8" src={icon} />
                            <span className="pl-2"> KALVIN </span>
                        </Link>
                    </div>
                    <TooltipComponent content="Profile" position="BottomCenter">
                        <div
                            className="flex items-center gap-2 cursor-pointer p-1 px-2 hover:bg-gray-400/50 rounded-lg"
                            onClick={() => handleClick("userProfile")}>
                            <div
                                className="flex-none flex justify-center items-center rounded-full h-9 w-9"
                                style={{ backgroundColor: currentColor }}>
                                <span className="text-gray-400 font-bold font-display text-lg">
                                    {getUserInitials()}
                                </span>
                            </div>
                            <MdKeyboardArrowDown className="-ml-1 text-gray-400 text-lg" />
                        </div>
                    </TooltipComponent>
                </div>
            ) : (
                <div className="flex justify-between p-2 relative bg-secondary dark:bg-secondary-dark drop-shadow-lg font-display">
                    <div className="flex w-[275px]">
                        <Link
                            to={auth ? "/home" : "/"}
                            className="items-center ml-2 flex text-2xl font-extrabold text-white">
                            <img className="h-8" src={icon} />
                            <span className="pl-2"> KALVIN </span>
                        </Link>
                    </div>
                    <div className="flex w-full justify-evenly">
                        <div className="flex">
                            <NavButtonText
                                title="home"
                                customFunc={() => {}}
                                color={currentColor}
                            />
                        </div>
                        <div className="flex">
                            <NavButtonText
                                title="todo"
                                customFunc={() => {}}
                                color={currentColor}
                            />
                        </div>
                        <div className="flex">
                            <NavButtonText
                                title="calendar"
                                customFunc={() => {}}
                                color={currentColor}
                            />
                        </div>
                    </div>
                    <div className="flex w-[275px] justify-end">
                        {auth && (
                            <NavButtonIcon
                                title="Add"
                                customFunc={() => handleClick("add")}
                                color={currentColor}
                                icon={<AiOutlinePlusCircle />}
                            />
                        )}
                        {auth && (
                            <NavButtonIcon
                                title="Notifications"
                                customFunc={() => handleClick("notification")}
                                dotColor="red"
                                color={currentColor}
                                icon={<RiNotification3Line />}
                            />
                        )}
                        <TooltipComponent
                            content="Profile"
                            position="BottomCenter">
                            <div
                                className="flex items-center gap-2 cursor-pointer p-1 px-2 hover:bg-gray-400/50 rounded-lg"
                                onClick={() => handleClick("userProfile")}>
                                <div
                                    className="flex-none flex justify-center items-center rounded-full h-9 w-9"
                                    style={{ backgroundColor: currentColor }}>
                                    <span className="text-gray-400 font-bold font-display text-lg">
                                        {getUserInitials()}
                                    </span>
                                </div>
                                <MdKeyboardArrowDown className="-ml-1 text-gray-400 text-lg" />
                            </div>
                        </TooltipComponent>

                        {isClicked.add && <Add />}
                        {isClicked.notification && <Notification />}
                        {isClicked.userProfile && <UserProfile />}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
