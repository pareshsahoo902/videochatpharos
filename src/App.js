import logo from './logo.svg';
import './App.css';
import './VideoChatContainer';
import VideoChatContainer from './VideoChatContainer';

function App() {
  return (
    <div className="App">
      <h1>WebRTC P2PVideoChat</h1>
      <h2>React + Firebase</h2>
      <VideoChatContainer />
    </div>
  );
}

export default App
