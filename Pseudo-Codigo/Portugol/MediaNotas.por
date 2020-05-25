programa
{
	
	funcao inicio()
	{
		real nota1, nota2, nota3, nota4, media
		cadeia aluno
		escreva("Digite o seu nome: ")
		leia(aluno)
		escreva("Digite sua primeira nota: ")
		leia(nota1)
		escreva("Digite sua segunda nota: ")
		leia(nota2)
		escreva("Digite sua terceira nota: ")
		leia(nota3)
		escreva("Digite sua quarta nota: ")
		leia(nota4)

		media = (nota1 + nota2 + nota3 +nota4)/4

		escreva("\nSua média é: " + media + "\n\n")
		se(media >= 7.0){
			escreva("Parabens " + aluno + "! Voce foi aprovado")
		} 
		senao{
			escreva("Infelizmente voce não foi aprovado " + aluno + "...")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 605; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */