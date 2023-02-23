import { actions } from "$/reducer";
import { Word } from "$/state";
import textToSpeach from "$/thirdParty/textToSpeach";
import { uploadWord } from "../thirdParty/firebaseStorage";

export const loadWordAudio = (word: Word) => {
  return async (dispatch: any) => {
    try {
      let audio = word.audio;
      if (!audio) {
        dispatch(actions.loadingAudio());
        audio = await textToSpeach(word.name);
        dispatch(actions.loadWordAudio({ word, audio }));
        uploadWord({ ...word, audio });
      }
    } catch (e: any) {
      dispatch(actions.loadingError());
    }
  };
};

export default loadWordAudio;
