import styles from "./Welcome.module.css";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { actions } from "$/reducer";

const Welcome: FC = () => {
  const dispatch = useDispatch();

  function startGame() {
    dispatch(actions.startGame());
  }
  
  return (
    <div className={styles.Welcome}>
      {/* <img className={styles.Logo} src="/images/secretwords.png"/> */}
      <button className={styles.StartGameButton} onClick={startGame}>Start Game</button>
    </div>
  );
};

export default Welcome;
