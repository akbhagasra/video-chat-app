import React, { Children } from "react";
import { useSocketContext } from "../SocketContext";

const Options = ({ children }) => {
    const {
        setName,
        me,
        callUser,
        setUserToCall,
        userToCall,
        leaveCall,
        callAccepted,
    } = useSocketContext();
    return (
        <div className="container mx-auto bg-slate-400 rounded mt-4 p-4 flex-col justify-center">
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
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <p className="border border-gray-300 rounded px-3 py-2 w-full">
                            {me || "--"}
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
                            onChange={(e) => setUserToCall(e.target.value)}
                            value={userToCall}
                        />
                    </div>
                    <div className="mb-4">
                        {!callAccepted ? (
                            <div className="flex mt-4">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                                    onClick={() => callUser(userToCall)}
                                >
                                    Call
                                </button>
                            </div>
                        ) : (
                            <div className="flex mt-4">
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
                                    onClick={leaveCall}
                                >
                                    Leave Call
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Button at the bottom right */}

            {children}
        </div>
    );
};

export default Options;
