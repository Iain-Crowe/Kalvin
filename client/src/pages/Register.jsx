import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

import axios from "axios";

import { basePath } from "../contexts/BuildPath";

const Register = () => {
    const { currentColor } = useStateContext();

    const [message, setMessage] = useState("");

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passConfRef = useRef();

    const doRegister = (event) => {
        event.preventDefault();
        
        if (passwordRef.current.value !== passConfRef.current.value) {
            setMessage('Passwords must match');
            return
        }

        axios.defaults.baseURL = basePath();
        axios.post("/api/user/register", {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        })
        .then((res) => {
            if (res.status === 201) {
                setMessage('Registration Successful');
            }
        })
        .catch((err) => {
            if (err.response.status === 400) {
                setMessage('Email already in use');
            }
            else {
                setMessage('Unknown Error Occured');
            }
        });
    };

    return (
        <div className="flex place-items-center justify-center mt-24">
            <form
                onSubmit={doRegister}
                className="flex-row justify-center border-2 border-black dark:border-white bg-white dark:bg-secondary-dark h-[625px] w-[400px] rounded-lg drop-shadow-xl p-4">
                <div className="flex-row text-center mt-4">
                    <h2 className="text-black dark:text-white text-xl font-bold">
                        Welcome to Kalvin!
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400 text-md font-semibold">
                        Tell us a bit about yourself!
                    </p>
                    <p className="text-red-600 text-md mt-2">{message}</p>
                </div>
                <div className="mt-4">
                    <label className="block dark:text-white my-4 px-4 w-full">
                        First Name:
                        <input
                            className="px-2 py-1 border-b-2 border-black dark:border-white bg-transparent w-full focus:outline-none focus:bg-gray-500/25 rounded-t-sm"
                            type="text"
                            placeholder="> First Name"
                            ref={firstNameRef}
                            id="firstName"
                        />
                    </label>
                    <label className="block dark:text-white my-4 px-4 w-full">
                        Last Name:
                        <input
                            className="px-2 py-1 border-b-2 border-black dark:border-white bg-transparent w-full focus:outline-none focus:bg-gray-500/25 rounded-t-sm"
                            type="text"
                            placeholder="> Last Name"
                            ref={lastNameRef}
                            id="lastName"
                        />
                    </label>
                    <label className="block dark:text-white my-4 px-4 w-full">
                        Email:
                        <input
                            className="px-2 py-1 border-b-2 border-black dark:border-white bg-transparent w-full focus:outline-none focus:bg-gray-500/25 rounded-t-sm"
                            type="text"
                            placeholder="> Email"
                            ref={emailRef}
                            id='email'
                        />
                    </label>
                    <label className="block dark:text-white my-4 px-4 w-full">
                        Password:
                        <input
                            className="px-2 py-1 border-b-2 border-black dark:border-white bg-transparent w-full focus:outline-none focus:bg-gray-500/25 rounded-t-sm"
                            type="password"
                            placeholder="> Password"
                            ref={passwordRef}
                            id='password'
                        />
                    </label>
                    <label className="block dark:text-white my-4 px-4 w-full">
                        Confirm Password:
                        <input
                            className="px-2 py-1 border-b-2 border-black dark:border-white bg-transparent w-full focus:outline-none focus:bg-gray-500/25 rounded-t-sm"
                            type="password"
                            placeholder="> Confirm Password"
                            ref={passConfRef}
                            id='passConf'
                        />
                    </label>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="block text-white px-2 py-2 rounded-md w-full mx-4 mt-2 outline outline-0 outline-offset-2 hover:outline-2"
                        onClick={doRegister}
                        style={{
                            backgroundColor: currentColor,
                            outlineColor: currentColor,
                        }}>
                        Register
                    </button>
                </div>
                <div className="flex justify-center">
                    <Link
                        className="underline text-blue-400 hover:text-blue-600 mt-4"
                        to={"/"}
                        onClick={() => setMessage("")}>
                        Back
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
