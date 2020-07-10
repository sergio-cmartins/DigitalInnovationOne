//*** Default Function Values ***
// Normal function;
function multiply1(a,b){
	return a * b;
}

console.log(multiply1(5,9));

//In this case if you ommit a value you get NaN as result:
console.log(multiply1(5));


//Old Way to solve this is testing each parameter, but this makes the code
// harder to read as is prone to errors
function multiply2(){
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	return a * b;
}

console.log(multiply2(5));
console.log(multiply2());

//After ES6 you can simply assign a default value for the function
//produces the same result as multiply2 but simpler code
function multiply3(a = 1,b = 1){
	return a * b;
}

console.log(multiply3(5));
console.log(multiply3());

// Note that the default value uses Lazy evaluation, that means even if
// you use a function, it will only be called the moment it's needed
function randomNumber(){
	var rn = parseInt((Math.random() * 10))
	console.log('called the randomNumber: ' + rn)
	return rn;
}

function multiply4(a = randomNumber(), b = randomNumber()){
	return a * b;
}

console.log(multiply4(5)); //called randomNumber
console.log(multiply4(5)); //called again on the second execution
console.log(multiply4());  //called twice
console.log(multiply4());  //and twice more
