import Notification from "./components/Notification";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

function App() {
    return (
        <div className="bg-slate-700 min-h-screen flex-columns items-center justify-center">
            <header className="bg-slate-600 bg-opacity-75 rounded-lg text-white text-center py-4">
                <h1 className="text-xl font-bold">Your App Name</h1>
            </header>
            <VideoPlayer />
            <Options>
                <Notification />
            </Options>
        </div>
    );
}

export default App;
