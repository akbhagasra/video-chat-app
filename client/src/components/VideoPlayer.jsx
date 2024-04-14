import React from "react";
import { useSocketContext } from "../SocketContext";
import ReactPlayer from "react-player";
import Webcam from "react-webcam";

const VideoPlayer = () => {
    const { name, myVideo, userVideo, stream, callAccepted, call } =
        useSocketContext();
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user",
    };

    return (
        <div className="flex flex-col lg:flex-row mt-4 justify-center align-middle items-center">
            {stream && (
                <div className="w-fit bg-slate-50 rounded-xl">
                    <p className="text-xl text-center">{name || "--"}</p>
                    {/* <video
                        className="h-350px rounded-b-xl w-full"
                        ref={myVideo}
                        autoPlay
                        muted
                        playsInline
                    ></video> */}
                    {/* <ReactPlayer
                        ref={myVideo}
                        autoPlay
                        muted
                        className="h-350px rounded-b-xl w-full"
                    /> */}
                    <Webcam
                        className="h-350px rounded-b-xl w-full"
                        audio={false}
                        height={720}
                        ref={myVideo}
                        screenshotFormat="image/jpeg"
                        width={1280}
                        videoConstraints={videoConstraints}
                    />
                </div>
            )}
            {callAccepted && (
                <div className="w-fit bg-slate-50 rounded-xl lg:mt-0 lg:ml-4 mt-4">
                    <p className="text-xl text-center">{call.name || "--"}</p>
                    {/* <video
                        className="h-350px rounded-b-xl w-full"
                        ref={userVideo}
                        autoPlay
                        playsInline
                    ></video> */}
                    <Webcam
                        className="h-350px rounded-b-xl w-full"
                        audio={true}
                        height={720}
                        ref={userVideo}
                        screenshotFormat="image/jpeg"
                        width={1280}
                        videoConstraints={videoConstraints}
                    />
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
