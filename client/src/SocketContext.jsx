import React, {
    useState,
    useContext,
    useRef,
    useEffect,
    createContext,
} from "react";

const SocketContext = createContext();

// const socket = io("http://localhost:8080");

const SocketContextProvider = ({ children }) => {
    const [name, setName] = useState("");

    useEffect(() => {});

    const answerCall = () => {};
    const callUser = () => {};
    const leaveCall = () => {};

    return (
        <SocketContext.Provider
            value={{ name, answerCall, callUser, leaveCall }}
        >
            {children}
        </SocketContext.Provider>
    );
};

const useSocketContext = () => useContext(SocketContext);

export { SocketContextProvider, useSocketContext };
