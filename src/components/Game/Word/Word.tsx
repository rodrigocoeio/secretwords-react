import styles from "./Word.module.css";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, Word } from "$/state";
import playAudio from "@/scripts/playAudio";
import Letter from "./Letter";
import { loadWordAudio, loadWordsTranslations } from "$/actions";

const Word: FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: State) => state.loading);
  const wordIndex = useSelector((state: State) => state.wordIndex);
  const words = useSelector((state: State) => state.words);
  const allLettersOpened = useSelector(
    (state: State) => state.allLettersOpened
  );
  const word = words[wordIndex] ? words[wordIndex] : false;

  if (word) {
    const letters = word.name.split("");

    useEffect(() => {
      if (allLettersOpened && word.audio) {
        playAudio(word.audio as string);
      }
    }, [allLettersOpened, word]);

    function playWordHandler(word: Word) {
      if (allLettersOpened) {
        if (word.audio) {
          playAudio(word.audio as string);
        } else if (!loading.audio || loading.audio === "error") {
          dispatch(loadWordAudio(word));
        }

        if (
          !word.translation &&
          (!loading.translations || loading.translations === "error")
        ) {
          dispatch(loadWordsTranslations(words));
        }
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
