import { Letter, State } from "../store/state";

declare global {
  interface Window {
    keyListener: boolean;
  }
}

let gameState;

function keyListener(
  started: boolean,
  letters: Letter[],
  allLettersOpened: boolean
) {
  gameState = {
    started,
    letters,
    allLettersOpened,
  };

  if (window.keyListener) return false;

  const listenKeyBoardEvents = function (e) {
    const key = e.key;

    //console.log("Pressed key: " + key);

    // Welcome Page ( Game not Started )
    if (!gameState.started) {
      switch (key) {
        // Start Game
        case "Enter":
          document.getElementById("startGame")!.click();
          break;
      }
    }

    // Game Page ( Game Started )
    else {
      switch (key) {
        // Quit Game
        case "Escape":
          document.getElementById("quitGame")!.click();
          break;
        // Previous Word
        case "ArrowLeft":
          document.getElementById("previousWord")!.click();
          break;
        // Next Word
        case "ArrowRight":
          document.getElementById("nextWord")!.click();
          break;
        // Next Word on Enter if allLettersOpened
        /* case "Enter":
          if(gameState.allLettersOpened)
            document.getElementById("nextWord")!.click();
          break; */
        default:
          const letter = gameState.letters.find(
            (l) => l.name.toLowerCase() === key.toLowerCase()
          );
          if (letter) {
            document
              .getElementById("letter-" + letter.name.toLowerCase())!
              .click();
          }
          break;
      }
    }
  };

  window.addEventListener("keydown", listenKeyBoardEvents);
  window.keyListener = true;
}

export default keyListener;
