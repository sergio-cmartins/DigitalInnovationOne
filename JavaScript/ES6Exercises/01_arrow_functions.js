//Traditional Function
function sum1(a,b){
	return a + b;
};
console.log(sum1(10,5));

//Anonimous Function
var sum2 = function(a,b) { return a + b;};
console.log(sum2(11,22));

//Funções construtoras
function Car(name){
	this.name = name;
}
console.log (new Car('Opala'));

//*** Arrow Functions ***
//With one expression you don't need curly brackets
var sum3 = (a,b) => a + b;
console.log(sum3(8,5));

//With one parameter only you don't need parentesys on the first part
var isEven = a => (a%2) === 0;
console.log(' 7 is even ? ' + isEven(7));
console.log('38 is even ? ' + isEven(38));

// Arrow Functions use lexycal context, so the 'this' context is always inside the calling
var obj = {
	showContext: function showContext(){
		setTimeout(() => { 
			this.log(this);
		}, 1000);
	},
	log: function log(value) {
		console.log(value)
	}
}
obj.showContext();