import { FC } from "react";
import { useSelector } from "react-redux";
import { State } from "$/state";

const Word: FC = () => {
  const wordIndex = useSelector((state: State) => state.wordIndex);
  const words = useSelector((state: State) => state.words);

  return <div></div>;
};

export default Word;
