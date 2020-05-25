// Programa simples de tabuada, mostrando as diversas formas
// de se utilizar laços no Portugol
// Autor: Sergio da Costa Martins

programa
{
	
	funcao inicio()
	{
		inteiro fator, iteracao = 0, resultado
		escreva("Digite o Fator para criar a Tabuada: ")
		leia(fator)
		escreva("\nResultado:\n")

		/*
		 * // Laco "Enquanto" (testa antes de executar)
		enquanto(iteracao < 10){
			iteracao++
			resultado = fator * iteracao
			escreva(fator + " X " + iteracao + " = " + resultado + "\n")
		}
		*/

		/*
		// Laco "Faca" 
		//  a diferenca para o Laco "enquanto" é que o "faca" executa pelo
		//  menos uma vez
		faca{
			iteracao++
			resultado = fator * iteracao
			escreva(fator + " X " + iteracao + " = " + resultado + "\n")
		} enquanto (iteracao < 10)
		*/
		
		// Laco "para", 
		//  executa n vezes de acordo com os parametros definidos no inicio o laco
		para(iteracao = 1; iteracao <= 10;iteracao++){
			resultado = fator * iteracao
			escreva(fator + " X " + iteracao + " = " + resultado + "\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 131; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */