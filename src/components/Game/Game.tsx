import styles from "./Game.module.css";
import { FC } from "react";
import Controls from "./Controls/Controls";
import LettersControls from "./LettersControls/LettersControls";
import Word from "./Word/Word";
import Wrapper from "../Helpers/Wrapper";

const Game: FC = () => {
  return (
    <Wrapper>
      <Controls />
      <LettersControls />
      <Word />
    </Wrapper>
  );
};

export default Game;
