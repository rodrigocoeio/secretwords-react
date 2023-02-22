import styles from "./Welcome.module.css";
import { FC } from "react";
import { startGame } from "$/actions";
import { useSelector } from "react-redux";
import { State } from "$/state";
import { useDispatch } from "react-redux";

const Welcome: FC = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: State) => state.status);

  const startGameHandler = () => {
    dispatch(startGame());
  };

  return (
    <div className={styles.Welcome}>
      <img className={styles.Logo} src="/images/secretwords.png" />
      <button
        disabled={status === "loading-words"}
        className={styles.StartGameButton}
        onClick={startGameHandler}
      >
        {status === "loading-words" ? "Loading Words..." : "Start Game"}
      </button>
    </div>
  );
};

export default Welcome;
