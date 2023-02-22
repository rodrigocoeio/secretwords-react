import axios from "axios";

export async function textToSpeach(text) {
  const encodedParams = new URLSearchParams();
  encodedParams.append("src", text);
  encodedParams.append("hl", "en-us");
  encodedParams.append("r", "0");
  encodedParams.append("c", "mp3");
  encodedParams.append("b64", "true");
  encodedParams.append("ssml", "false");
  encodedParams.append("f", "44khz_16bit_stereo");

  const options = {
    method: "POST",
    url: "https://voicerss-text-to-speech.p.rapidapi.com/",
    params: { key: "79bf0c61577d430abc1fa5991bbff6ed" },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "6d5a7a27c1mshae849ff0aacbc4ep172a14jsne8e048008cd3",
      "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
    },
    data: encodedParams,
  };

  const response = await axios.request(options);

  return response.data;
}

export default textToSpeach;
