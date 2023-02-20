import "./Welcome.css";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/reducer";

const Welcome: FC = () => {
  const dispatch = useDispatch();

  function startGame() {
    dispatch(actions.startGame());
  }
  
  return (
    <div>
      Welcome!
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};

export default Welcome;
