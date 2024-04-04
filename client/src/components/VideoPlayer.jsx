import React from "react";

const VideoPlayer = () => {
    return (
        <div className="flex container p-4 justify-center">
            <div className="w-1/2 bg-slate-50 rounded-2xl ">
                <p className="text-xl text-center">User 1 name</p>
                <video className="bg-red-500 h-350px rounded-b-2xl w-full"></video>
            </div>
            <div className="w-1/2 bg-slate-50 rounded-2xl ml-4">
                <p className="text-xl text-center">User 1 name</p>
                <video className="bg-red-500 h-350px rounded-b-2xl w-full"></video>
            </div>
        </div>
    );
};

export default VideoPlayer;
