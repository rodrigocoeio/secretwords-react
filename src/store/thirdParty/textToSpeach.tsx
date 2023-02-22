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
    params: { key: import.meta.env["VITE_VoiceRSS_KEY"] },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": import.meta.env["VITE_X-RapidAPI-Key"],
      "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
    },
    data: encodedParams,
  };

  const response = await axios.request(options);

  return response.data;
}

export default textToSpeach;
