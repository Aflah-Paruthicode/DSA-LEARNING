function countWordsInSentence (sentence) {
    let words = sentence.split(' ').filter((ele) => ele !== '');
    return words.length;
}

console.log(countWordsInSentence('hello world'))