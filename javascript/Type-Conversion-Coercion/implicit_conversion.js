// Implicit Type Conversions

console.log('===================================== implicit conversion ====================================');
console.log(1 + '1', typeof(1 + '1'))   // 11
// here the plus operator converting the number(1) into string so the output becomes 11.

console.log(null == 'null', typeof(null == 'null'))   //false 'boolean'

console.log(10 * '10');  // here multiply(*) operator converts the string into number. output will be 100
console.log(10 + '10');  // here plus(+) operator converts the number into string. output will be 1010

console.log('10' * 10);
console.log('10' + 10);

console.log(10 - '10');

console.log(null == 'null');  // null(empty value) compare with string so output will be false.
console.log(null === 'null');
console.log(null === '', typeof(null === ''));  

console.log(7 == '7');