let input;
let total = 0;
const numbers = [];

do {
    input = prompt(`Введите число`);
    let num = Number(input);
    numbers.push(num);
    if (input === null) {
        alert('Пользователь отменил ввод')
    }
}
while (input !== null)
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];

}

console.log(`Результат сложения чисел = ${total}`);
