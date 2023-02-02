import { connect } from "react-redux";
import "./Welcome.css";
import getWords from "../store/getWords";

function Welcome({ started, loadingWords, dispatch }) {
  async function startGame() {
    dispatch({ type: "loadingWords" });
    const words = await getWords();
    dispatch({ type: "startGame", words });
  }

  return (
    <div className="Welcome">
      <div className="Logotipo">
        <img src="/images/secretwords.png" height="300" />

        <br />
        <button
          id="startGame"
          className="btn btn-success"
          disabled={loadingWords}
          onClick={startGame}
        >
          {loadingWords ? "Loading Words..." : "Start Game"}
        </button>
      </div>
    </div>
  );
}

export default connect((state) => ({
  started: state.started,
  loadingWords: state.loadingWords,
}))(Welcome);
