const playAudio = (audio_name) => {
    var audio = new Audio(audio_name);
    audio.play();
    return audio;
  };
  

export default playAudio;