import "./App.css";
import { useSelector } from "react-redux";
import { State } from "$/state";
import Welcome from "#/Welcome/Welcome";
import Game from "#/Game/Game";

function App() {
  const started = useSelector((state: State) => state.started);
  return <div className="App">{started ? <Game /> : <Welcome />}</div>;
}

export default App;
