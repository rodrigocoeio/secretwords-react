const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z']
const words = ['Apple','Orange','Pinnable','Lemon','Grape'];

const defaultState = {
    started: false,
    words: words,
    wordsIndex: 0,
    word: words[0],
    loadingWords: false,
    allWordOpened: false,
    letters: letters.map(letter => ({name: letter, opened: false}))
}

export default defaultState;