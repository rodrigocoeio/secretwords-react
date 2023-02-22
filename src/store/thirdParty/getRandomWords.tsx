import axios from "axios";

async function getRandomWords() {
  const options = {
    method: "GET",
    url: "https://random-words5.p.rapidapi.com/getMultipleRandom",
    params: { count: "20" },
    headers: {
      "X-RapidAPI-Key": import.meta.env['VITE_X-RapidAPI-Key'],
      "X-RapidAPI-Host": import.meta.env['VITE_X-RapidAPI-Host'],
    },
  };

  const response = await axios.request(options);

  return response.data;
}

export default getRandomWords;