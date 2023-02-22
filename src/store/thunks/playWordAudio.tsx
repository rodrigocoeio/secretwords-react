import { actions } from "$/reducer";
import { Word } from "$/state";
import textToSpeach from "$/thirdParty/textToSpeach";
import playAudio from "@/scripts/playAudio";

export const playWordAudio = (word: Word) => {
  return async (dispatch: any) => {
    try {
      let audio = word.audio;
      if (!audio) {
        dispatch(actions.loadingWordAudio(word));
        audio = await textToSpeach(word.name);
        dispatch(actions.loadWordAudio({ word, audio }));
      }

      if(audio) {
        playAudio(audio);
      }
    } catch (e: any) {
      dispatch(actions.loadingError());
    }
  };
};

export default playWordAudio;
