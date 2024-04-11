import React from "react";
import { useSocketContext } from "../SocketContext";

const Notification = () => {
    const { answerCall, callAccepted, leaveCall, call } = useSocketContext();
    return (
        <div className="bg-slate-400 flex items-center p-2 rounded text-white justify-between">
            {call.isReceivedCall && !callAccepted && (
                <>
                    <p className="text-2xl">call from user :: {call.name}</p>
                    <div>
                        <button
                            className="mr-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            onClick={answerCall}
                        >
                            Accept
                        </button>
                        <button
                            className="mr-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            onClick={leaveCall}
                        >
                            Reject
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Notification;
