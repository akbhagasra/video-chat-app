import React from "react";
import { useSocketContext } from "../SocketContext.jsx";

const Notification = () => {
    const {} = useSocketContext();
    return (
        <div className="bg-slate-400 flex items-center p-2 rounded-xl text-white">
            <p className="w-3/4 text-2xl">User 1 is calling...</p>
            <div>
                <button className="mr-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Accept
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Reject
                </button>
            </div>
        </div>
    );
};

export default Notification;
