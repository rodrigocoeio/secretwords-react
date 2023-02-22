import styles from "./Game.module.css";
import { FC } from "react";
import Controls from "./Controls/Controls";
import LettersControls from "./LettersControls/LettersControls";

const Game: FC = () => {
  return (
    <div>
      <Controls />
      <LettersControls />
    </div>
  );
};

export default Game;
