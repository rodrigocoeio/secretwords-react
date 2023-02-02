export default (state, action) => {
  if (typeof reducers[action.type] === "function") {
    return reducers[action.type](state, action);
  }

  return state;
};

const reducers = {
  startGame(state, action) {
    const words = action.words;

    console.log(words);

    console.log("Start Game");

    return {
      ...state,
      started: true,
      words: words,
      word: words[0],
      wordsIndex: 0,
      letters: resetLetters(state.letters),
      allLettersOpened: false,
      loadingWords: false,
    };
  },

  quitGame(state) {
    console.log("Quit Game");

    return {
      ...state,
      started: false,
    };
  },

  loadingWords(state) {
    return {
      ...state,
      loadingWords: true,
    };
  },

  previousWord(state) {
    console.log("Previous Word");

    const wordsIndex = state.wordsIndex - 1;
    const word = state.words[wordsIndex] ? state.words[wordsIndex] : "";

    if (!word) return state;

    return {
      ...state,
      wordsIndex: wordsIndex,
      word: word,
      letters: resetLetters(state.letters),
      allLettersOpened: false,
    };
  },

  nextWord(state) {
    console.log("Next Word");

    const wordsIndex = state.wordsIndex + 1;
    const word = state.words[wordsIndex] ? state.words[wordsIndex] : "";

    if (!word) return state;

    return {
      ...state,
      wordsIndex: wordsIndex,
      word: word,
      letters: resetLetters(state.letters),
      allLettersOpened: false,
    };
  },

  openLetter(state, action) {
    const letter = action.letter;

    console.log("Opened letter: " + letter);
    
    const letters = state.letters.map((l) => {
      if (letter.toLowerCase() === l.name.toLowerCase()) l.opened = true;
      return l;
    });

    const letterFounded = findLetterInWord(letter, state.word);
    const allLettersOpened = checkAllLettersOpened(letters, state.word);

    if (letterFounded) {
      playOpenLetterAudio(letter);

      if (allLettersOpened) {
        playAllLettersOpened();
      }
    } else {
      playWrongLetterAudio();
    }

    return {
      ...state,
      letters,
      allLettersOpened: allLettersOpened,
    };
  }
};



function findLetterInWord(letter, word) {
  const wordLetters = word.split("");

  return wordLetters.find((wordLetter) => {
    return letter.toLowerCase() === wordLetter.toLowerCase();
  });
}

function checkAllLettersOpened(letters, word) {
  const wordLetters = word.split("");

  return wordLetters.every((letter) => {
    letter = letters.find(
      (l) => l.name.toLowerCase() === letter.toLowerCase()
    );
    return letter && letter.opened;
  });
}

function resetLetters(letters) {
  return letters.map((letter) => ({ ...letter, opened: false }));
}

function playOpenLetterAudio(letter) {
  return playAudio("/audios/letters/" + letter + ".mp3");
}

function playWrongLetterAudio() {
  return playAudio("/audios/wrong.mpeg");
}

function playAllLettersOpened() {
  const number = Math.floor(Math.random() * 2);
  return playAudio("/audios/right" + number + ".mp3");
}