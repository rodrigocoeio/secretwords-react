import { connect } from "react-redux";
import "./Controls.css";

function Controls({ started, words, wordsIndex, dispatch }) {
  function quitGame() {
    dispatch({ type: "quitGame" });
  }

  function previousWord() {
    dispatch({ type: "previousWord" });
  }

  function nextWord() {
    dispatch({ type: "nextWord" });
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a id="logo" className="navbar-brand">
          <img src="images/favicon.png" width="36" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <a className="navbar-brand" href="#">
            <img src="images/favicon.png" width="36" />
          </a>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                id="previousWord"
                disabled={wordsIndex === 0}
                onClick={previousWord}
                className="btn btn-warning"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-left-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
                &nbsp; Previous Word
              </button>
            </li>

            <li className="WordIndex nav-item">
              {wordsIndex + 1} / {words.length}
            </li>

            <li className="nav-item">
              <button
                id="nextWord"
                disabled={wordsIndex === words.length - 1}
                onClick={nextWord}
                className="btn btn-success"
              >
                Next Word &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </button>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <button
                id="quitGame"
                className="btn btn-danger"
                onClick={quitGame}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
                &nbsp; Quit Game
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default connect((state) => ({
  started: state.started,
  words: state.words,
  wordsIndex: state.wordsIndex,
}))(Controls);
