import { actions } from "$/reducer";
import { Word } from "$/state";
import getWordsTranslations from "$/thirdParty/getWordsTranslations";
import { uploadWords } from "../thirdParty/firebaseStorage";

export const loadWordsTranslations = (words: Word[]) => {
  return async (dispatch: any) => {
    try {
      if (words[0] && !words[0].translation) {
        dispatch(actions.loadingTranslations());

        const translations = await getWordsTranslations(
          words.map((w) => w.name)
        );

        const newWords: Word[] = [];
        for (const key in translations) {
          if (words[key]) {
            const translation = translations[key];
            const newWord = { ...words[key], translation };
            newWords.push(newWord);
          }
        }

        dispatch(actions.loadTranslations(newWords));
        uploadWords(newWords);
      }
    } catch (e: any) {
      dispatch(actions.loadingError());
    }
  };
};

export default loadWordsTranslations;
