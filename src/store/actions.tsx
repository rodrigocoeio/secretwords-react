import getRandomWords from "./thirdParty/getRandomWords";
import { actions } from "./reducer";

export const startGame = () => {
  return async (dispatch:any) => {
    try {
      dispatch(actions.loadingWords());
      let words = await getRandomWords();
      words = words.map(word => ({name: word, audio: false, translation: false}))
      dispatch(actions.startGame(words));
    } catch (e: any) {
      console.error(e);
    }
  };
};
