import React, {
    createContext,
    useContext,
    useState,
    useRef,
    useEffect,
} from "react";
import { io } from "socket.io-client";
import Peer from "peerjs";

const SocketContext = createContext();

// const socket = io("http://localhost:5000");

const SocketContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [stream, setStream] = useState(null);
    const [me, setMe] = useState("");
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [userToCall, setUserToCall] = useState("");

    const myVideo = useRef(null);
    const userVideo = useRef(null);
    const peerRef = useRef(null);
    const callRef = useRef(null);

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then((currentStream) => {
                setStream(currentStream);
                myVideo.current.srcObject = currentStream;
            });

        // socket.on("me", (id) => {
        // setMe(id);
        const myPeer = new Peer();
        myPeer.on("open", (id) => {
            setMe(id);
        });

        myPeer.on("call", (data) => {
            callRef.current = data;

            setCall({
                isReceivedCall: true,
                from: data.peer,
                name: data.peer,
            });
        });
        peerRef.current = myPeer;
        // });
    }, []);

    const answerCall = () => {
        setCallAccepted(true);

        callRef.current.answer(stream);

        callRef.current.on("stream", (userVideoStream) => {
            userVideo.current.srcObject = userVideoStream;
            userVideo.current.play();
        });
    };
    const callUser = () => {
        const c = peerRef.current.call(userToCall, stream);

        c.on("stream", (userVideoStream) => {
            setCall({
                isReceivedCall: false,
                from: userToCall,
                name: userToCall,
            });
            setCallAccepted(true);
            userVideo.current.srcObject = userVideoStream;
            userVideo.current.play();
        });

        c.on("close", () => {
            leaveCall();
        });
    };
    const leaveCall = () => {
        setCall({});
        setCallAccepted(false);
        userVideo.current.destroy();
        callRef.current.destroy();
        setCall({});
    };

    return (
        <SocketContext.Provider
            value={{
                name,
                stream,
                setName,
                me,
                call,
                callAccepted,
                userToCall,
                setUserToCall,
                answerCall,
                callUser,
                leaveCall,
                myVideo,
                userVideo,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

const useSocketContext = () => useContext(SocketContext);

export { SocketContextProvider, useSocketContext };
