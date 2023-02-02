import axios from "axios";

async function getWords() {
  const options = {
    method: "GET",
    url: "https://random-words5.p.rapidapi.com/getMultipleRandom",
    params: { count: "20" },
    headers: {
      "X-RapidAPI-Key": "6d5a7a27c1mshae849ff0aacbc4ep172a14jsne8e048008cd3",
      "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);

  return response.data;
}

export default getWords;
