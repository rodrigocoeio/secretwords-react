import styles from "./Word.module.css";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "$/state";
import { playWordAudio, translateWords } from "$/actions";
import Letter from "./Letter";

const Word: FC = () => {
  const dispatch = useDispatch();
  const wordIndex = useSelector((state: State) => state.wordIndex);
  const words = useSelector((state: State) => state.words);
  const allLettersOpened = useSelector(
    (state: State) => state.allLettersOpened
  );
  const word = words[wordIndex] ? words[wordIndex] : false;

  function playWordHandler() {
    if (word && allLettersOpened) {
      if (!word.translation) dispatch(translateWords(words));
      dispatch(playWordAudio(word));
    }
  }

  if (word) {
    const letters = word.name.split("");

    if (allLettersOpened) {
      if (!word.translation) dispatch(translateWords(words));
      dispatch(playWordAudio(word));
    }

    return (
      <div className={styles.Word} onClick={playWordHandler}>
        {letters.map((letter, index) => (
          <Letter key={index} letter={letter} word={word} />
        ))}

        {word.translation && allLettersOpened ? <h1>{word.translation}</h1> : <div />}
      </div>
    );
  }

  return <div />;
};

export default Word;
