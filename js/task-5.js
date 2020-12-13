
const checkForSpam = function (message) {

    message = message.toLowerCase();
    const spamWords = ['spam', 'sale'];

    for (const spamWord of spamWords) {
        if (message.includes(spamWord)) {
            return true;
        }
    }
    return false;
}
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
