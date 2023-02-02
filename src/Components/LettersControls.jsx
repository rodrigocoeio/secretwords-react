import { connect } from "react-redux";
import "./LettersControls.css";

function Letters({ letters, allLettersOpened, dispatch }) {
  function openLetter(e) {
    const letter = e.target.getAttribute("letter");
    dispatch({ type: "openLetter", letter });
  }

  return (
    <div className="LettersBox">
      {letters.map((letter, index) => (
        <button
          key={index}
          id={"letter-"+letter.name}
          className="btn btn-primary LetterButton"
          disabled={(letter.opened || allLettersOpened)}
          letter={letter.name}
          onClick={openLetter}
        >
          {letter.name.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default connect((state) => ({
  letters: state.letters,
  allLettersOpened: state.allLettersOpened
}))(Letters);
