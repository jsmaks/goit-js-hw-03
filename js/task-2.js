const calculateEngravingPrice = function (message, pricePerWord) {

    const wordL = message.split(' ').length;
    const result = wordL * pricePerWord;
    return result;
}
console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        10,
    ),
); // 80

console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        20,
    ),
); // 160

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
    calculateEngravingPrice('Welcome to Bahamas!', 20),
);
