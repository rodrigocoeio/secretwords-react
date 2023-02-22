const playAudio = (audio_name: string, options?: { volume: number }) => {
  const audio = new Audio(audio_name);

  if (options && options.volume) {
    audio.volume = options.volume;
  }

  audio.play();
  return audio;
};

export default playAudio;
