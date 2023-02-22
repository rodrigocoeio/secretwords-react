import styles from "./Game.module.css";
import { FC } from "react";
import Controls from "./Controls/Controls";

const Game: FC = () => {
  return (
    <div>
      <Controls />
    </div>
  );
};

export default Game;
