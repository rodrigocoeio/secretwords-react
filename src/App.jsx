import Welcome from "./Components/Welcome";
import Game from "./Components/Game";
import keyListener from "./keyListener";
import { connect } from "react-redux";
import "./App.css";

function App({ state, dispatch }) {
  keyListener(state);

  return (
    <div className="App">
      {!state.started ? <Welcome/> : <Game/>}
    </div>
  );
}

export default connect((state) => ({ state }))(App);
