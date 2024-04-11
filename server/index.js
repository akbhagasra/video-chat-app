const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const { ExpressPeerServer } = require("peer");

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

const peerServer = ExpressPeerServer(server, {
    path: "/",
});

app.use("/", peerServer);

app.get("/", (req, res) => {
    res.send("Server is running !!");
});

const uid = () => {
    return Math.floor(Math.random() * 1000)
        .toString()
        .padEnd(6, "0");
};

io.on("connection", (socket) => {
    console.log({ "IO connection": socket.id });

    socket.emit("me", uid());

    socket.on("disconnect", () => {
        socket.broadcast.emit("callended");
    });

    socket.on("calluser", ({ userToCall, signal, from, name }) => {
        io.to(userToCall).emit("calluser", { signal: signal, from, name });
    });

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);
    });
});

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
