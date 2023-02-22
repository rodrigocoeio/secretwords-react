import getRandomWords from "./thirdParty/getRandomWords";
import getWordsTranslation from "./thirdParty/getWordsTranslations";
import { actions } from "./reducer";
import { Word } from "./state";

function transformWords(words: string[], translations: string[]): Word[] {
  return words.map((word, index) => ({
    name: word,
    audio: false,
    translation: translations[index] ? translations[index] : false,
  }));
}

export const startGame = () => {
  return async (dispatch: any) => {
    try {
      dispatch(actions.loadingWords());
      const words = await getRandomWords();
      const translations = await getWordsTranslation(words);

      dispatch(actions.startGame(transformWords(words, translations)));
    } catch (e: any) {
      dispatch(actions.loadingError());
    }
  };
};
