import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Login = () => {
    const { currentColor } = useStateContext();

    const message = '';

    return (
        <div className="flex place-items-center justify-center mt-32">
            <form className="flex-row justify-center border-2 border-black dark:border-white bg-white dark:bg-secondary-dark h-[450px] w-[400px] rounded-lg drop-shadow-xl p-4">
                <div className="flex-row text-center mt-4">
                    <h2 className="text-black dark:text-white text-xl font-bold">
                        Welcome to Kalvin!
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400 text-md font-semibold">
                        Please login:
                    </p>
                    <p className="text-red-600 text-md mt-2">{message}</p>
                </div>
                <div className="mt-4">
                    <label className="block dark:text-white my-4 px-4 w-full">
                        Email:
                        <input
                            className="px-2 py-1 border-b-2 border-black dark:border-white bg-transparent w-full focus:outline-none focus:bg-gray-500/25 rounded-t-sm"
                            type="text"
                            placeholder="> Email"
                        />
                    </label>
                    <label className="block dark:text-white my-4 px-4 w-full">
                        Password:
                        <input
                            className="px-2 py-1 border-b-2 border-black dark:border-white bg-transparent w-full focus:outline-none focus:bg-gray-500/25 rounded-t-sm"
                            type="password"
                            placeholder="> Password"
                        />
                    </label>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="block text-white px-2 py-2 rounded-md w-full mx-4 mt-2 outline outline-0 outline-offset-2 hover:outline-2"
                        style={{
                            backgroundColor: currentColor,
                            outlineColor: currentColor,
                        }}>
                        Login
                    </button>
                </div>
                <div className="flex justify-center mt-4">
                    <span className="text-black dark:text-white truncate">
                        Don't have an account?
                    </span>
                    <Link className="underline text-blue-400 hover:text-blue-600 pl-2">
                        Register
                    </Link>
                </div>
                <Link className="flex justify-center underline text-blue-400 hover:text-blue-600 mt-2 truncate">
                    Forgot Password?
                </Link>
            </form>
        </div>
    );
};

export default Login;
