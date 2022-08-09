import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Preview from "./Components/Preview";
import WebcamCapture from "./Components/WebcamCapture";
import Chats from "./Components/Chats";
import ChatView from "./Components/ChatView";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__body">
          <Routes>
            <Route path="/chats" element={<Chats />} />
            <Route path="/chats/view" element={<ChatView />} />
            <Route path="/" element={<WebcamCapture />} />
            <Route path="/Preview" element={<Preview />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
