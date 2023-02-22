import "./App.css";
import { useSelector } from "react-redux";
import { State } from "$/state";
import Welcome from "#/Welcome/Welcome";
import Game from "#/Game/Game";
import keyListener from "./scripts/keyListener";

function App() {
  const state = useSelector((state: State) => state);
  const started = useSelector((state: State) => state.started);
  keyListener(state);

  return <div className="App">{started ? <Game /> : <Welcome />}</div>;
}

export default App;
