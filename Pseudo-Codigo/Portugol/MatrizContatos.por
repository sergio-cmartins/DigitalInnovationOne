// Programa simples para Armazenamento das Informações de contato simples
// Uso de matrizes e laços
// Autor: Sergio da Costa Martins

programa
{
	funcao inicio()
	{
		cadeia contatos[][] = {{"João","São Paulo","(11) 9999-5241"},{"Maria","Ribeirão Preto","(16) 9999-8596"},{"Ana","Manaus","(92) 9999-8574"}}
		para(inteiro i = 0 ; i <= 2; i++){
			escreva("Nome: " + contatos[i][0])
			escreva(", Cidade: " + contatos[i][1])
			escreva(", Telefone: " + contatos[i][2])
			escreva("\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 483; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */