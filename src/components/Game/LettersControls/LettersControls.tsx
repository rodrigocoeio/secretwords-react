import { FC } from "react";
import styles from "./LettersControls.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { State, Letter } from "$/state";
import { actions } from "$/reducer";

const LettersControls: FC = () => {
  const dispatch = useDispatch();
  const letters = useSelector((state: State) => state.letters);

  function openLetterHandler(letter: Letter) {
    dispatch(actions.openLetter(letter));
  }

  return (
    <div className={styles.LettersControl}>
      {letters.map((letter, index) => (
        <button
          key={index}
          className={styles.LetterButton}
          onClick={() => openLetterHandler(letter)}
          disabled={letter.opened}
        >
          {letter.name.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LettersControls;
