import styles from "./Game.module.css";
import { FC } from "react";
import Controls from "./Controls/Controls";
import LettersControls from "./LettersControls/LettersControls";
import Word from "./Word/Word";

const Game: FC = () => {
  return (
    <div>
      <Controls />
      <LettersControls />
      <Word />
    </div>
  );
};

export default Game;
