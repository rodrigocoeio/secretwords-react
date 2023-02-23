import { actions } from "$/reducer";
import { Word } from "$/state";
import getRandomWords from "$/thirdParty/getRandomWords";
import { getWords, uploadWords } from "$/thirdParty/firebaseStorage";

async function transformWords(words: string[]): Word[] {
  const storedWords = await getWords();

  return words.map((word, index) => {
    if (storedWords[word]) return storedWords[word];

    return {
      name: word,
      audio: false,
      translation: false,
    };
  });
}

export const startGame = () => {
  return async (dispatch: any) => {
    try {
      dispatch(actions.loadingWords());
      let words = await getRandomWords();
      words = await transformWords(words);
      uploadWords(words);
      dispatch(actions.startGame(words));
    } catch (e: any) {
      dispatch(actions.loadingError());
    }
  };
};

export default startGame;
