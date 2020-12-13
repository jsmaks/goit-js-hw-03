// const formatString = function (string) {
//     const maxWords = 40;

//     if (string.length > maxWords) {
//         string = string.slice(0, 39);
//         string = `${string}...`
//     }
//     return string;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//     formatString(
//         'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
// );
// //вернется форматированная строка
const { name, age, ...props } = { name: 'Poly', age: 3, games: 47, isOnline: false };
console.log({ props });