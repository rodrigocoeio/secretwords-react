import { useSelector } from "react-redux";
import { Word, State } from "@/store/state";
import { FC } from "react";
import styles from "./Letter.module.css";

const Letter: FC = (props) => {
  const { letter, word } = props as { letter: string; word: Word };
  const gameLetter = useSelector((state: State) =>
    state.letters.find((l) => l.name === letter)
  );
  const allLettersOpened = useSelector(
    (state: State) => state.allLettersOpened
  );

  if (gameLetter && gameLetter.opened) {
    return (
      <span key={"letter-" + letter} className={`${styles.LetterBox} ${styles.Letter}${allLettersOpened ? ' '+styles.Opened : ''}`}>
        {letter}
      </span>
    );
  } else {
    return (
      <span key={"cover-" + letter} className={styles.LetterBox}>
        ?
      </span>
    );
  }
};

export default Letter;
