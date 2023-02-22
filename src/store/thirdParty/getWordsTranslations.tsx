import axios from "axios";

async function getWordsTranslations(words: string[]) {
  const options = {
    method: "POST",
    url: "https://rapid-translate-multi-traduction.p.rapidapi.com/t",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": import.meta.env["VITE_X-RapidAPI-Key"],
      "X-RapidAPI-Host": "rapid-translate-multi-traduction.p.rapidapi.com",
    },
    data: JSON.stringify({ from: "en", to: "pt-BR", e: "", q: words }),
  };

  const response = await axios.request(options);

  return response.data;
}

export default getWordsTranslations;
