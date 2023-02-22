import { actions } from "$/reducer";
import { Word } from "$/state";
import getRandomWords from "$/thirdParty/getRandomWords";

function transformWords(words: string[]): Word[] {
  return words.map((word, index) => ({
    name: word,
    audio: false,
    translation: false,
  }));
}

export const startGame = () => {
  return async (dispatch: any) => {
    try {
      dispatch(actions.loadingWords());
      const words = await getRandomWords();
      dispatch(actions.startGame(transformWords(words)));
    } catch (e: any) {
      dispatch(actions.loadingError());
    }
  };
};

export default startGame;
