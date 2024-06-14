// Array's methods
console.log('===================================== forEach Method ==========================================');
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matrix.forEach(element => {
    // console.log(element);
    element.forEach(element2 => {
        console.log(element2);
    });
});

console.log('===================================== map() Method ============================================');


console.log('===================================== join() Method ===========================================');
let arrStr = ['My', 'Name', 'is', 'Menka']
let arrStrResults = arrStr.join(' ');
// let arrStrResults = arrStr.join('/');
// console.log(arrStr)
console.log(arrStrResults)


console.log('===================================== slice() Method ==========================================');
// slice() does not modifies the original array. It removes element. 
const arrSl = [12, 23, 45, 78, 56, 43, 34, 85, 90];
console.log(arrSl.slice(0, 8));  // include, exclude
console.log(arrSl.slice(1));


console.log('===================================== splice() Method ==========================================');
// splice() Changes the original array. It removes and also add element
const arrSpl = [12, 23, 45, 78, 56, 43, 34, 85, 90];
arrSpl.splice(1, 2, 99, 75);  // index, delete, adding elements
console.log(arrSpl);


console.log('===================================== reverse() Method ==========================================');
// reverse() Changes the original array.
let str = ["a" ,"g", "l", "m", "z"];
console.log(str.reverse());
console.log(str);


console.log('===================================== Array Methods ===========================================');
// concat() methods
var letters = ["a", "b", "c"];
alphaNumeric = letters.concat([1, 2, 3]);
console.log(alphaNumeric);


// push() method
var arr = [2, 5, 8, 22, 32];
arr.push(40);
console.log(arr);


// pop() method
arr.pop();
console.log(arr);


// shift() method
arr.shift();  // shift: removes first element from an array
console.log(arr);


// unshift() method
arr.unshift(50);  // unshift: adds element to starting of an array 
console.log(arr);


// toString() method
let arrStr2 = ['My', 'Name', 'is', 'Menka']
// console.log(arr.toString());
console.log(arrStr2.toString());






