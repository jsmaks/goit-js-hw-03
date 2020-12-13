const findLongestWord = function (string) {

    const word = string.split(' ');
    let longestWord = '';
    let wordLength = 0;

    for (let i = 0; i < word.length; i++)
        if (word[i].length > wordLength) {
            longestWord = word[i];
            wordLength = word[i].length;
        }
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazyyy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'