// Explicit Type Conversion

// string conversion
console.log('================================== string conversion (explicit) =================================');

var num = 1;
var boolean = true;
var nul = null;
var undef = undefined;

var str_num = new String(num).valueOf();
var str_bool = new String(boolean).valueOf();
var str_nul = new String(nul).valueOf();
var str_undef = new String(undef).valueOf();

console.log('num', str_num, 'Type Of', typeof(str_num));
console.log('bool', str_bool, 'Type Of', typeof(str_bool));
console.log('nul', str_nul, 'Type Of', typeof(str_nul));
console.log('undef', str_undef, 'Type Of', typeof(str_undef));


// boolean conversion
console.log('================================= boolean conversion (explicit) =================================');

var str = 'Menka';
var bool_num = new Boolean(num).valueOf();
var bool_str = new Boolean(str).valueOf();
var bool_nul = new Boolean(nul).valueOf();
var bool_undef = new Boolean(undef).valueOf();

console.log('num_bool', bool_num, 'Type', typeof(bool_num));
console.log('bool_str', bool_str, 'Type', typeof(bool_str));
console.log('nul_bool', bool_nul, 'Type', typeof(bool_nul));
console.log('undef_bool', bool_undef, 'Type', typeof(bool_undef));


// number conversion
console.log('================================= number conversion (explicit) =================================');

var num_bool = new Boolean(num).valueOf();
var num_str = new Boolean(str).valueOf();
var num_nul = new Boolean(nul).valueOf();
var num_undef = new Boolean(undef).valueOf();

console.log('num_bool', num_bool, 'Type', typeof(num_bool));
console.log('bool_str', num_str, 'Type', typeof(num_str));
console.log('nul_bool', num_nul, 'Type', typeof(num_nul));
console.log('undef_bool', num_undef, 'Type', typeof(num_undef));


// parsed the value
console.log(parseInt('123'));
console.log(parseInt('123', 10)); // here 10 is denoted to base 10 which returns decimal number.
console.log(parseInt('ff', 16));  // here 16 is denoted to hexa decimal which returns hexa decimal value.
console.log(parseInt('ff'));     // it returns NaN


