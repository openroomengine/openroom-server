import firstUC from './firstUC.js'

export default (...words) => words.reduce((acc, word) => acc + firstUC(word))
