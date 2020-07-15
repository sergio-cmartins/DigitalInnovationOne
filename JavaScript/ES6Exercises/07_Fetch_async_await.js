/* needed for nodejs as it don't have the fetch method built in */

const fetch = require("node-fetch");

/** Fetch automatically makes a http / xml request and create a promisse from the results
*/

/** ES7 only, Async / Await
 *  async automatically creates a promisse and handle return as fullfilled and throw as rejected
 */


const myFunc = async() => {
	const dataJSON = await fetch('http://viacep.com.br/ws/03266180/json').then(responseStream => {
			if (responseStream.status === 200){
				return responseStream.json();
			} else {
				throw new Error('Request Error');
			}
	})

	return dataJSON; 
}

myFunc()
	.then( data => console.log(data))
	.catch( error => console.log(error))