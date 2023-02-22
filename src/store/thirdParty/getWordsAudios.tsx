import textToSpeach from "./textToSpeach";

export async function getWordsAudios(words: string[]) {
  const audios: string[] = [];

  for (const word of words) {
    const audio = await textToSpeach(word);
    audios.push(audio);
  }

  return audios;
}

export default getWordsAudios;
