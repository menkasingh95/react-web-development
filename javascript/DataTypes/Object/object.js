// objects
var obj = {};
console.log('Obj', obj);   
console.log('type of obj', typeof(obj));

// add and modify properties 
var obj = {name: 'Menka', age: 24};
console.log('obj', obj);
obj.city = 'New Delhi';
console.log('obj', obj);
obj['contact'] = '1234567890';
console.log('obj', obj);
console.log('type of obj', typeof(obj));

console.log(obj.name);
console.log(obj['name']);



// Date Objects
var dateTime = new Date();
console.log('dateTime', dateTime);
console.log('Full Year', dateTime.getFullYear());
console.log('Time', dateTime.getTime());
console.log(typeof(dateTime));