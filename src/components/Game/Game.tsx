import styles from "./Game.module.css";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { actions } from "$/reducer";
import { useSelector } from "react-redux";
import { State } from "$/state";

const Game: FC = () => {
  const dispatch = useDispatch();
  const words = useSelector((state: State) => state.words);

  function quitGame() {
    dispatch(actions.quitGame());
  }

  return (
    <div>
      {words.map((word) => (
        <p>{word.name}</p>
      ))}

      <button className={styles.QuitGameButton} onClick={quitGame}>
        Quit Game
      </button>
    </div>
  );
};

export default Game;
