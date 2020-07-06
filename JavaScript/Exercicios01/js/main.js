//Comentando o bloco de exemplos de comandos
/*
var str = "loreen ipsun doloren sit amet";
var n1 = 45;
var n2 = 12;
console.log("Ao invez de usar a pagina, console.log mostra as informações na console do navegador.");
console.log("Mosta o string 'str':")
console.log(str);
console.log("str.replace, substituindo 'loreen' por 'loren'")
str.replace("loreen","loren");
console.log(str);
console.log("str.toUpperCase, muda a string para maiusculo")
str.toUpperCase()
console.log(str);
console.log("Efetuando contas com variáveis: n1 (45) + n2 (12):")
console.log(n1 + n2);
console.log("Javascript sempre vai tentar converter uma variavel quando necessário")
console.log("neste caso ele converte n1 e n2 para String, concatenando ao inves de somar:")
console.log("soma: " + n1 + n2); // sem precedencia transforma os numeros em strings 
console.log("soma: " + (n1 + n2)); // neste a precedencia de parentes executa a soma depois converte

console.log("Criando um array/lista com os elemento maça, pera e laranja:")
var lista = ["maça", "pera", "laranja"];
console.log(lista);
console.log("lista.push('mamão') inclui o elemento no fim da lista")
lista.push("mamão");
console.log(lista);
console.log("lista.reverse inverte a sequencia de todos os elementos da lista")
lista.reverse();
console.log(lista);
console.log("lista.pop remove o ultimo elemento da lista, neste caso a maça por conta do reverse")
lista.pop();
console.log(lista);
console.log("Também é possivel transformar a lista em string com lista.toString()")
console.log(lista.toString());
console.log("O metodo toString também pode ser chamado implicitamente")
console.log("no exemplo foi usado 'lista contem: ' + lista")
console.log("Lista contém: " + lista)
console.log("Também é possivel usar o join para converter a lista")
console.log(lista.join("|"))

console.log("Criando um elemento de dicionario")
dict = {nome:"maça", cor:"vermelha"}
console.log(dict)
console.log("note que dicionarios em Javascript usam a notação json")
console.log("E com o dicionario acima podemos pesquisar")

var idade = prompt("Qual a sua Idade?")
if (idade >= 18) {
	alert("Você é maior de idade.")
}else {
	alert("Você ainda é menor de idade.")
	
}
*/

function buttonClick()
{
	document.getElementById("messageClick").innerHTML="Obrigado por Clicar!";
}

function highlight(e,hl)
{
	if(hl == true){
		e.style.fontWeight = "bold"
	} else {
		e.style.fontWeight = "normal"
	}
}