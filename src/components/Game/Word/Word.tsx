import styles from "./Word.module.css";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, Word } from "$/state";
import playAudio from "@/scripts/playAudio";
import Letter from "./Letter";

const Word: FC = () => {
  const wordIndex = useSelector((state: State) => state.wordIndex);
  const words = useSelector((state: State) => state.words);
  const allLettersOpened = useSelector(
    (state: State) => state.allLettersOpened
  );
  const word = words[wordIndex] ? words[wordIndex] : false;

  if (word) {
    const letters = word.name.split("");

    if (allLettersOpened && word.audio) {
      playAudio(word.audio as string);
    }

    function playWordHandler(word: Word) {
      if (allLettersOpened && word.audio) {
        playAudio(word.audio as string);
      }
    }

    return (
      <div className={styles.Word} onClick={() => playWordHandler(word)}>
        {letters.map((letter, index) => (
          <Letter key={index} letter={letter} word={word} />
        ))}

        {word.translation && allLettersOpened ? (
          <h1>{word.translation}</h1>
        ) : (
          <div />
        )}
      </div>
    );
  }

  return <div />;
};

export default Word;
