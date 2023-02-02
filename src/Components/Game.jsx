import Controls from "./Controls"
import LettersControls from "./LettersControls";
import Word from "./Word"

function Game() {
    return (
        <div>
            <Controls></Controls>
            <LettersControls></LettersControls>
            <hr/>
            <Word></Word>
        </div>
    )
}

export default Game;