import "./Game.css";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/reducer";

const Game: FC = () => {
  const dispatch = useDispatch();

  function quitGame() {
    dispatch(actions.quitGame());
  }
  
  return (
    <div>
      Game!
      <button onClick={quitGame}>Quit Game</button>
    </div>
  );
};

export default Game;
