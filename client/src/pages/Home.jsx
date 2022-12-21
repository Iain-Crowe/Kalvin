import React from "react";

import { AiOutlineEdit, AiOutlineCloseCircle } from "react-icons/ai";

const Home = () => {
    const priority = ["!", "!!", "!!!"];

    const items = [
        {
            index: 0,
            title: "Do Homework",
            desc: "All kinds or words and stuff like that. Filling up some text boxes -- very nice. Even more words to test if this cool plugin I found works!",
            date: "Dec 31",
            priority: 2,
            tags: [
                {
                    title: "School",
                    color: "#3F8224",
                },
                {
                    title: "Homework",
                    color: "#823F24",
                },
                {
                    title: "COP4331",
                    color: "#1F2482",
                },
            ],
        },
        {
            index: 1,
            title: "Clean Room",
            desc: "No description",
            date: "Dec 31",
            priority: 0,
            tags: [
                {
                    title: "Housekeeping",
                    color: "#158695",
                },
            ],
        },
    ];

    return (
        <div className="flex justify-between p-4 gap-4 font-display">
            <div className="flex border-2 border-gray-600 dark:border-gray-500 bg-white dark:bg-secondary-dark h-[82vh] w-2/3 rounded-lg drop-shadow-xl">
                Profile
            </div>
            <div className="flex-row border-2 border-gray-600 dark:border-gray-500 bg-white dark:bg-secondary-dark h-[82vh] w-1/3 rounded-lg drop-shadow-xl overflow-y-auto scroll smooth">
                <div className="flex py-4 px-6 text-black dark:text-gray-300 text-lg font-bold">
                    <h2>Upcoming:</h2>
                </div>
                <div className="flex-row px-6">
                    {items.map((item) => (
                        <div
                            key={item.index}
                            className="flex-col justify-between w-[100%] p-4 mb-4 bg-main dark:bg-main-dark border-2 border-gray-600 dark:border-gray-500 rounded-xl drop-shadow-lg">
                            <div className="flex-row">
                                <span className="text-black dark:text-gray-300 text-md font-semibold w-11/12">
                                    {item.title}
                                    {" -"}
                                </span>
                                <span className="text-gray-700 dark:text-gray-400 text-sm line-clamp-2 mt-2 w-11/12">
                                    {item.desc}
                                </span>
                                <div className="flex justify-between items-center mt-2 w-11/12">
                                    <div className="">
                                        <span className="text-gray-700 dark:text-white text-sm italic font-semibold bg-yellow-300/50 p-1 rounded-md">
                                            {item.date}
                                        </span>
                                        <span className="text-gray-700 py-1 dark:text-gray-300 font-extrabold text-sm pl-2">
                                            |
                                        </span>
                                        <span className="px-2 py-1 text-red-600 text-sm font-semibold">
                                            {priority[item.priority]}
                                        </span>
                                    </div>
                                    <div className="flex">
                                        {item.tags.map((tag) => (
                                            <div
                                                key={tag.title}
                                                className="mx-1 px-1 rounded-md"
                                                style={{
                                                    backgroundColor: tag.color,
                                                }}>
                                                <span className="text-white text-xs">
                                                    {tag.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="grid absolute top-0 right-2 h-full place-content-evenly text-xl text-black dark:text-gray-300 w-1/12">
                                <button className="hover:bg-gray-400/50 dark:hover:bg-gray-600/50 p-2 rounded-full">
                                    <AiOutlineEdit />
                                </button>
                                <button className="text-red-600 hover:bg-gray-400/50 dark:hover:bg-gray-600/50 p-2 rounded-full">
                                    <AiOutlineCloseCircle />
                                </button>
                            </div>
                        </div>
                    ))}
                    <button className="text-center py-2 w-full hover:bg-gray-400/50 rounded-lg mb-4">
                        <span className="text-gray-700 dark:text-gray-300 font-semibold">Add Item +</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
