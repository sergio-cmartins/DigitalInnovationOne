/** 
Using classic javascript callback
to verbose and prone to errors
*/

function doSomething(callback){
	setTimeout(function(){
		//did something
		callback('First data');
	}, 1000);
}

function doOtherThing(callback){
	setTimeout(function(){
		//did something
		callback('Second data');
	}, 1000);
}

function doAll(){
	try{
		doSomething(function(data){
			var processedData = data.split('');
			try{
				doOtherThing(function(data2){
					var processedData2 = data2.split('');
					try{
						setTimeout(function(){
							console.log(processedData, processedData2);
						}, 1000);
					} catch (err){
						//Handle the error in the final assynchronous part of the function
					}
				});
			} catch(err){
				// Handle the error in the second function
			}
		});
	} catch(err){
		//Handle the error of the first function
	}
}

doAll();
console.log();
/** 
Using ES6 promisses to clean up the code 
*/

/*
with promisses you don't need set a timeout, as you can test the correct status of the promisse
possible promisse status are:
 - Pending (the promisse still hasn't executed the code)
 - Fullfilled (promisse executed and returned the resolve value)
 - Rejected (error in the promisse and returned the reject value)
*/

const doSomethingPromisse = () =>
	new Promise((resolve, reject) => {
		//throw('some error');
		setTimeout(function(){
			//did something
			resolve('Promissed First data');
		}, 1000);
	});

const doOtherThingPromisse = () =>
	new Promise((resolve, reject) => {
		//throw('some other error')
		setTimeout(function(){
			//did something
			resolve('Promissed Second data');
		}, 1000);
	});

/* calling the promisses in parallel */
Promise.all([doSomethingPromisse(), doOtherThingPromisse()])
	.then(data => console.log(data.toString(' ').split('')))
	.catch(error => console.log('Ops ' + error));


/* calling the promisses sequentially */
doSomethingPromisse()
	.then(data => {
		console.log(data.split(''));
		return doOtherThingPromisse()
	})
	.then(data2 => console.log(data2.split('')))
	.catch(error => console.log('Ops ' + error)); //You need to catch the error only once



