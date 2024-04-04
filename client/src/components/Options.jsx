import React, { Children } from "react";

const Options = ({ children }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-start">
                {/* Left side */}
                <div className="w-1/2 pr-2">
                    <div className="mb-4">
                        <input
                            type="text"
                            id="item1"
                            name="item1"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-4">
                        <p className="border border-gray-300 rounded px-3 py-2 w-full">
                            IDDD
                        </p>
                    </div>
                </div>
                {/* Right side */}
                <div className="w-1/2 pl-2">
                    <div className="mb-4">
                        <input
                            type="text"
                            id="item3"
                            name="item3"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                            placeholder="Enter id to call"
                        />
                    </div>
                    <div className="mb-4">
                        <div className="flex mt-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                                Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Button at the bottom right */}

            {children}
        </div>
    );
};

export default Options;
