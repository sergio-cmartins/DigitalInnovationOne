/*Codigo copiado do exercico do professor Gabriel Faraday para a aula de C# do bootcamp carrefour da DIO
 arquivo original pode ser encontrado em:
   https://github.com/gabrielfbarros/csharp-examples/blob/master/01-EstruturaDoPrograma/Exemplos/Pilha.cs
*/

using System;

namespace PilhaSimples.Entities
{
    public class Pilha
    {
        Posicao primeiro;
        public void Empilha(object item) 
        {
            primeiro = new Posicao(primeiro, item);
        }

        public object Desempilha() 
        {
            if (primeiro == null)
            {
                throw new InvalidOperationException("A pilha está vazia!");
            }

            object resultado = primeiro.item;
            primeiro = primeiro.proximo;
            return resultado;
        }
        
        class Posicao
        {
            public Posicao proximo;
            public object item;
            public Posicao(Posicao proximo, object item)
            {
                this.proximo = proximo;
                this.item = item;
            }
        }
    }
}