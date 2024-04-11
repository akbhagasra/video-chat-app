import Notification from "./components/Notification";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

function App() {
    return (
        <div className="bg-slate-700 min-h-screen flex-columns items-center justify-center p-4">
            <h1 className="bg-slate-400 flex items-center p-2 rounded text-white justify-center text-xl font-bold">
                Video Chat
            </h1>

            <VideoPlayer />
            <Options>
                <Notification />
            </Options>
        </div>
    );
}

export default App;
