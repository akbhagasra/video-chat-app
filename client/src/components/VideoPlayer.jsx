import React from "react";
import { useSocketContext } from "../SocketContext";

const VideoPlayer = () => {
    const { name, myVideo, userVideo, stream, callAccepted, callEnded, call } =
        useSocketContext();
    return (
        <div className="flex container mt-4 justify-center">
            {stream && (
                <div className="w-1/2 bg-slate-50 rounded-xl ">
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
                <div className="w-1/2 bg-slate-50 rounded-xl ml-4">
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
