import styles from "./Word.module.css";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Letter, State, Word } from "$/state";
import { playWordAudio } from "$/actions";

function getWordLetters(gameLetters: Letter[], word: Word) {
  const words = word.name
    .toLowerCase()
    .split(" ")
    .map((word) => {
      let wordLetters = word.split("");

      return wordLetters.map((wordLetter, index) => {
        const letter = gameLetters.find((l) => l.name === wordLetter);

        return {
          letter: wordLetter,
          element:
            letter && letter.opened ? (
              <span
                key={"letter-" + index}
                className={styles.LetterBox + " " + styles.Letter}
              >
                {wordLetter}
              </span>
            ) : (
              <span key={"cover-" + index} className={styles.LetterBox}>
                ?
              </span>
            ),
        };
      });
    });

  return words;
}

const Word: FC = () => {
  const dispatch = useDispatch();
  const wordIndex = useSelector((state: State) => state.wordIndex);
  const words = useSelector((state: State) => state.words);
  const letters = useSelector((state: State) => state.letters);
  const allLettersOpened = useSelector(
    (state: State) => state.allLettersOpened
  );
  const word = words[wordIndex] ? words[wordIndex] : false;

  function playWordHandler() {
    if (word && allLettersOpened) {
      dispatch(playWordAudio(word));
    }
  }

  if (word) {
    const wordLetters = getWordLetters(letters, word);

    if (allLettersOpened) {
      dispatch(playWordAudio(word));
    }

    return (
      <div
        className={allLettersOpened ? styles.Word + " " + styles.Opened : ""}
        onClick={playWordHandler}
      >
        {wordLetters.map((letters, index) => (
          <div key={index}>
            {letters.map((letter) => letter.element)}
            <div className="clear"></div>
          </div>
        ))}
      </div>
    );
  }

  return <div />;
};

export default Word;
