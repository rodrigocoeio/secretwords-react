import "./App.css";
import { useSelector } from "react-redux";
import { State } from "./store/state";
import Welcome from "./components/Welcome/Welcome";
import Game from "./components/Game/Game";

function App() {
  const started = useSelector((state: State) => state.started);
  return <div className="App">{started ? <Game /> : <Welcome />}</div>;
}

export default App;
