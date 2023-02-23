const firebaseUrl =
  "https://english-words-1eb76-default-rtdb.firebaseio.com/english.json";

import { Word } from "$/state";
import { shuffleArray } from "@/scripts/shuffleArray";

export async function fetchData() {
  const response = await fetch(firebaseUrl);
  const data = await response.json();
  return data;
}

export async function setData(data) {
  const response = await fetch(firebaseUrl, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function getWords() {
  const data = await fetchData();
  return data.words ? data.words : {};
}

export async function uploadWords(newWords: Word[]) {
  const words = await getWords();

  for (const word of newWords) {
    words[word.name] = word;
  }

  setData({ words });
}

export async function uploadWord(word: Word) {
  const words = await getWords();
  words[word.name] = word;

  setData({ words });
}

export async function getRandomWords(
  options: {
    withAudio?: boolean;
    withTranslation?: boolean;
    number: number;
  } = { number: 20 }
) {
  let words = await getWords();
  words = Object.values(words);

  if (options?.withAudio) {
    words = words.filter((word) => word.audio);
  }
  if (options?.withTranslation) {
    words = words.filter((word) => word.translation);
  }

  words = shuffleArray(words);
  return words.slice(0, options.number);
}
