// Array
console.log('========================================== Array ============================================');

var a = [1, 2, 3, 'Menka'];
console.log(a);
console.log(a[0])
a[0] = 11;
console.log(a);
console.log(typeof(a));

let fruit = 'Apple';
fruit[1] = 'a'
console.log(fruit);
console.log(fruit[1])
console.log(typeof(fruit));


// diffrent ways to declare an array
console.log('============================== diffrent ways to declare an array =============================');
var arr1 = [2, 5, 8, 22, 32];
var arr2 = new Array();
var arr3 = [];
var arr4 = new Array(15);
var arr5 = new Array(15, 16);
console.log(arr1, arr2, arr3, arr4, arr5);

// access the array's elements
console.log(arr1[2]);
console.log(arr1[4]);

// modify the array's value
arr1[1] = 40;
console.log(arr1);
console.log(arr1[1]);


// Array's prototype
console.log('============================== prototype in array =============================');
Array.prototype.student = 'Menka'
console.log(Array)
console.log(Array.prototype)
console.log(Array.prototype.student)
console.log(Array.prototype.slice)

