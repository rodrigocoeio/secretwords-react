import { actions } from "$/reducer";
import { Word } from "$/state";
import getRandomWords from "$/thirdParty/getRandomWords";
import { getWords, uploadWords, getRandomWords as getStorageRandomWords } from "$/thirdParty/firebaseStorage";

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
      //const words = await getStorageRandomWords({withAudio:true,withTranslation:true,number:20});
      dispatch(actions.startGame(words));
    } catch (e: any) {
      console.error(e);
      const words = await getStorageRandomWords();
      dispatch(actions.startGame(words));
      dispatch(actions.loadingError());
    }
  };
};

export default startGame;
