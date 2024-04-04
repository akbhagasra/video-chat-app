const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Server is running !!");
});

io.on("connection", (socket) => {
    console.log("IO connection");
});
server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
