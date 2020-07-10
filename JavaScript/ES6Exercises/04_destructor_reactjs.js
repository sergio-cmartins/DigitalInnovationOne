//Verbose and hardcoded way to transfer array to variables

var frutesArr = ['orange','banana','apple',['tomato','cucumber']];
var orange1 = frutesArr[0];
var banana1 = frutesArr[1];
var apple1 =  frutesArr[2];
var tomato1 = frutesArr[3][0];
var cucumber1 = frutesArr[3][1];

console.log(frutesArr);
console.log(orange1);
console.log(banana1);
console.log(apple1);
console.log(tomato1);
console.log(cucumber1);

//using ES6 destructingArray
//but it's still prone to errors

var[orange2,banana2,apple2,[tomato2,cucumber2]] = frutesArr;
console.log(orange2);
console.log(banana2);
console.log(apple2);
console.log(tomato2);
console.log(cucumber2);

//for objects is similar, but we inform that were destructing an object
var objPerson = {
	name:'John',
	surName:'Doe',
	props: {
		age: 35,
		single: true}
	};

var {name, 
	 surName : surNamePerson, //second part is the variable name
	 props: {
	 	age,
	 	single : singlePerson}  //same as before
	 } = objPerson;

console.log(objPerson);
console.log(name);
console.log(surNamePerson);
console.log(age);
console.log(singlePerson);
