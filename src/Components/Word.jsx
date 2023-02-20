import { connect } from "react-redux";
import "./Word.css";
import textToSpeach from "../store/textToSpeach";

function getWordLetters(gameLetters, word) {
  let words = word.split(" ");

  words = words.map((word) => {
    let wordLetters = word.split("");

    return wordLetters.map((wordLetter, index) => {
      const letter = gameLetters.find(
        (l) => l.name.toLowerCase() === wordLetter.toLowerCase()
      );

      return {
        letter: wordLetter,
        element:
          letter && letter.opened ? (
            <span key={"letter-" + index} className="LetterBox Letter">
              {wordLetter}
            </span>
          ) : (
            <span key={"cover-" + index} className="LetterBox">
              ?
            </span>
          ),
      };
    });
  });

  return words;
}

function Word({ gameLetters, word, allLettersOpened }) {
  const wordLetters = getWordLetters(gameLetters, word, allLettersOpened);
  
  let wordAudio = false;
  async function playWord() {
    if (allLettersOpened) {
      wordAudio = wordAudio ? wordAudio : await textToSpeach(word);
      playAudio(wordAudio);
    }
  }

  return (
    <div>
      {wordLetters.map((letters, index) => (
        <div
          key={index}
          onClick={playWord}
          className={`Word ${allLettersOpened ? "Opened" : ""}`}
        >
          {letters.map((letter) => letter.element)}
          <div className="clear"></div>
        </div>
      ))}
    </div>
  );
}

export default connect((state) => ({
  gameLetters: state.letters,
  word: state.word,
  wordsIndex: state.wordsIndex,
  allLettersOpened: state.allLettersOpened,
}))(Word);
