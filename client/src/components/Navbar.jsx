import React, { useEffect } from "react";

import { AiOutlineMenu, AiOutlinePlusCircle } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import icon from "../data/icon-owl.png";
import avatar from "../data/avatar.jpg";
import { Add, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const {
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
    } = useStateContext();

    const auth = localStorage.getItem('user_data');
    console.log(auth);
    
    function getUserInitials() {
        if (!auth) return "?";
        return "IC";
    }
    
    const activeLink = "flex items-center px-3 rounded-lg text-white text-md";
    const normalLink = "flex items-center px-3 rounded-lg text-white text-md hover:bg-light-gray/50 hover:rounded-lg";

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
                className="relative text-xl rounded-full p-3 hover:bg-light-gray/60">
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
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="flex justify-between p-2 relative bg-secondary dark:bg-secondary-dark drop-shadow-lg font-display">
            <div className="flex w-[275px]">
                <Link
                    to="/"
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
                <NavButtonIcon
                    title="Add"
                    customFunc={() => handleClick("add")}
                    color={currentColor}
                    icon={<AiOutlinePlusCircle />}
                />
                <NavButtonIcon
                    title="Notifications"
                    customFunc={() => handleClick("notification")}
                    dotColor="red"
                    color={currentColor}
                    icon={<RiNotification3Line />}
                />
                <TooltipComponent content="Profile" position="BottomCenter">
                    <div
                        className="flex items-center gap-2 cursor-pointer p-1 px-2 hover:bg-light-gray/60 rounded-lg"
                        onClick={() => handleClick("userProfile")}>
                        <div className="flex-none flex justify-center items-center rounded-full h-9 w-9" style={{backgroundColor: currentColor}}>
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
    );
};

export default Navbar;
