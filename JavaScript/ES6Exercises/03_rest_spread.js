//A simple sum function with any number of arguments
//Befor ES6
function sum() {
	var value = 0;
	for(var i = 0; i < arguments.length; i++){
		value += arguments[i];
	}
	return value;
}

console.log(sum(10,5,2,30));

//With ES6 we can use rest and array functions
//rest turns the arguments into an array inside the function
function sum2(...args){
	return args.reduce((tot,x) => x + tot, 0);
}

console.log(sum2(10,5,2,30));

//Note that arrow functions do not have arguments object, so you have to use rest
sum3 = (...args) => args.reduce((tot,x) => x + tot, 0);

console.log(sum3(10,5,2,30));

//Unlike arguments object that alway get all values the rest operator ignores previously named arguments
multAndSum = (a, ...args) => a * args.reduce((tot,x) => x + tot, 0);

console.log(multAndSum(5)); // 5 * 0 = 0
console.log(multAndSum(5, 1)); // 5 * 1 = 5
console.log(multAndSum(5, 1, 2, 3)); // 5 * (1 + 2 + 3) = 30

//We can also use the spread operator that passes an array to parameter to other functions:
multAndSum2 = (a, ...args) => a * sum3(...args);

console.log(multAndSum2(5)); // 5 * 0 = 0
console.log(multAndSum2(5, 1)); // 5 * 1 = 5
console.log(multAndSum2(5, 1, 2, 3)); // 5 * (1 + 2 + 3) = 30

//spread on strings
const str = 'And now for something completely different'

function logStr(...args){
	console.log(args);
}

console.log(logStr(str)); //on this case the string is passed a one parameter only
console.log(logStr(...str)); //this spread the string into individual character parameters


//Other use for spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//If we simply to this well end with a bidimentional array
const arr3 = [arr1, arr2];
console.log(arr3);

//before we'll have to use concat function inside an array
const arr3b = arr1.concat(arr2);
console.log(arr3b);

//With ES6 we can simply use spread
const arr3c = [...arr1, ...arr2];
console.log(arr3c);

//With literal object, spread has some limited use to create new objects
const obj1 = {name: 'John', surname: 'Doe'};

console.log(obj1);

//cloning the object and including more attributes works
const obj2 = {...obj1, age: 35, single: true};

console.log(obj2);

//but since literal object is not iterable, you cannot do this 
// const arrObj = [...obj2]; //throws error