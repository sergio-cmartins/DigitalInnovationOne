//Calculo da media de vendas de quatro meses e definição do bonus a ser paga
//Autor: Sergio da Costa Martins
programa
{
	
	funcao inicio()
	{
		real vendasJaneiro, vendasFevereiro, vendasMarco, vendasAbril, mediaVendas, bonus, valorBonus
		cadeia vendedor
		
		//Entrada de Dados
		escreva("Digite o seu Nome: ")
		leia(vendedor)
		escreva("Digite o total de vendas de Janeiro: ")
		leia(vendasJaneiro)
		escreva("Digite o total de vendas de Fevereiro: ")
		leia(vendasFevereiro)
		escreva("Digite o total de vendas de Março: ")
		leia(vendasMarco)
		escreva("Digite o total de vendas de Abril: ")
		leia(vendasAbril)

		//Calculo da Média aritmetrica simples
		mediaVendas = (vendasJaneiro + vendasFevereiro + vendasMarco +vendasAbril)/4

		//Definição do percentual do bonus e mensagens sobre o percentual aplicado
		se(mediaVendas >= 5000.0){
			bonus = 0.1
			escreva("Parabens " + vendedor + ", você atingiu a meta e seu bonus será de 10%!")
		}
		senao{
			bonus = 0.03
			escreva("Infelizmente voce não atingiu a meta " + vendedor + ", seu bonus será de 3%...")
			
		}
		
		//Calculo do Valor do bonus com base no percentual definido
		valorBonus = mediaVendas * bonus
		
		
		//Apresentação das Informações calculadas
		escreva("\nA média de vendas: " + mediaVendas + "\n")
		escreva("Bonus: " + valorBonus)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1227; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */