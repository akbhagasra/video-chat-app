import React from "react";
import { useSocketContext } from "../SocketContext";

const VideoPlayer = () => {
    const { name, myVideo, userVideo, stream, callAccepted, callEnded, call } =
        useSocketContext();
    return (
        <div className="flex flex-col lg:flex-row mt-4 justify-center align-middle items-center">
            {stream && (
                <div className="w-fit bg-slate-50 rounded-xl">
                    <p className="text-xl text-center">{name || "--"}</p>
                    <video
                        className="h-350px rounded-b-xl w-full"
                        ref={myVideo}
                        autoPlay
                        muted
                        playsInline
                    ></video>
                </div>
            )}
            {call.from && callAccepted && (
                <div className="w-fit bg-slate-50 rounded-xl lg:mt-0 lg:ml-4 mt-4">
                    <p className="text-xl text-center">{call.from || "--"}</p>
                    <video
                        className="h-350px rounded-b-xl w-full"
                        ref={userVideo}
                        autoPlay
                        playsInline
                    ></video>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
