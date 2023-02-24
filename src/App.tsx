import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { State, Word } from "$/state";
import Welcome from "#/Welcome/Welcome";
import Game from "#/Game/Game";
import { loadWordAudio, loadWordsTranslations } from "$/actions";
import keyListener from "./scripts/keyListener";

function App() {
  const dispatch = useDispatch();
  const started = useSelector((state: State) => state.started);
  const loading = useSelector((state: State) => state.loading);
  const status = useSelector((state: State) => state.status);
  const letters = useSelector((state: State) => state.letters);
  const words = useSelector((state: State) => state.words) as Word[];
  const word = useSelector((state: State) => state.word) as Word;
  const allLettersOpened = useSelector(
    (state: State) => state.allLettersOpened
  );
  keyListener(started, letters, allLettersOpened);

  useEffect(() => {
    if (allLettersOpened) {
      if (!word.translation && !loading.translations) {
        dispatch(loadWordsTranslations(words));
      }
      if (!word.audio && !loading.audio) {
        dispatch(loadWordAudio(word));
      }
    }
  });

  return <div className={`App ${status=='loading' && 'Loading'}`}>{started ? <Game /> : <Welcome />}</div>;
}

export default App;
