import { FC } from "react";
import styles from "./Controls.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { State } from "$/state";
import { actions } from "$/reducer";

const Controls: FC = () => {
  const dispatch = useDispatch();
  const wordIndex = useSelector((state: State) => state.wordIndex);
  const words = useSelector((state: State) => state.words);
  const previousWordButtonDisabled = wordIndex === 0;
  const nextWordButtonDisabled = wordIndex + 1 === words.length;

  function previousWordHandler() {
    dispatch(actions.previousWord());
  }

  function nextWordHandler() {
    dispatch(actions.nextWord());
  }

  function quitGame() {
    dispatch(actions.quitGame());
  }

  return (
    <div className={styles.Controls}>
      <button
        disabled={previousWordButtonDisabled}
        className={styles.PreviousButton}
        onClick={previousWordHandler}
      >
        Previous
      </button>

      <div className={styles.Indexer}>
        {wordIndex + 1} / {words.length}
      </div>

      <button
        disabled={nextWordButtonDisabled}
        className={styles.NextButton}
        onClick={nextWordHandler}
      >
        Next
      </button>

      <button className={styles.QuitGameButton} onClick={quitGame}>
        Quit Game
      </button>
    </div>
  );
};

export default Controls;
