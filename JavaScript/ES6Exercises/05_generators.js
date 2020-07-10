//Symbols
const uniqueId = Symbol('abc'); //the string is solely for debug purposes, each symbol is unique
const uniqueId2 = Symbol('abc'); //the string is solely for debug purposes, each symbol is unique

console.log(uniqueId);
console.log(uniqueId2);
console.log(uniqueId === uniqueId2);

const obj = { [uniqueId] : 'Hello'}; //the bracket makes the property a computed property based on the value of the uniqueId

console.log(obj);

// o Symbol não aparece nas keys do objeto
console.log(Object.keys(obj));

// Contudo ainda é possivel verificar se o Objeto possui algum Symbol() declarado
console.log(Object.getOwnPropertySymbols(obj));

//Well known symbols
//Symbol.iterator
const  arr = ['a', 'b', 'c', 'd', 'e'];
const it = arr[Symbol.iterator]();

while (true){
	let {value, done} = it.next() //using destructor to populate the two vars
	if (done){
		break;
	}
	console.log(value);
}

//The same can be done using the for of construct without explicity moving through the symbol
for (let value of arr){
	console.log(value);	
}

//You can use Symbol.iterator to create an iteration of 
const itObj = {
	values: [1, 2, 3, 4, 5],
	[Symbol.iterator](){
		let i = 0;
		return{
			next: () =>{
				i++;
				return{
					value: this.values[i - 1],
					done: i > this.values.length
				}
			}
		}

	}
}

for (let val of itObj){
	console.log(val);
}
//Generators
function* hello(){ // the asterisc loads a function as a generator, allowin iteration in the function
	console.log('Hello')
	yield; //this marks the end of a iteration
	console.log('from')
	yield;
	console.log('function')
	yield;
}

const it2 = hello();

it2.next(); // call the function until the end of the first iteration
it2.next(); // provides the next iteration
it2.next(); // provides the next iteration

// using a generator in the previous obj iterator you can create a more conscise code.
const itObj2 = {
	values: [1, 2, 3, 4, 5],
	*[Symbol.iterator](){
		for ( i = 0; i< this.values.length; i++){
			yield this.values[i];
		}
	}
}

for (let val of itObj2){
	console.log(val);
}

