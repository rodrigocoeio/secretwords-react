import axios from "axios";

async function getRandomWords() {
  const options = {
    method: "GET",
    url: "https://random-words5.p.rapidapi.com/getMultipleRandom",
    params: { count: "20" },
    headers: {
      "X-RapidAPI-Key": import.meta.env["VITE_X-RapidAPI-Key"],
      "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    return response.data;
  } catch (e) {
    return await getRandomWords2();
  }
}

// Added second API option, just in case we run out of requests in the rapid api
async function getRandomWords2() {
  const randomWordsUrl = "https://random-word-api.herokuapp.com/word";
  const options = {
    method: "GET",
    url: randomWordsUrl,
    params: { number: "20", lang: "en" },
  };

  const response = await axios.request(options);

  return response.data;
}

export default getRandomWords;
