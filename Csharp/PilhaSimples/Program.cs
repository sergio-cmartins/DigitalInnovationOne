/*Codigo copiado do exercico do professor Gabriel Faraday para a aula de C# do bootcamp carrefour da DIO
 arquivo original pode ser encontrado em:
   https://github.com/gabrielfbarros/csharp-examples/blob/master/01-EstruturaDoPrograma/Program.cs
*/

using System;
using PilhaSimples.Entities;

namespace PilhaSimples
{
    class Program
    {
        static void Main()
        {
           var s = new Pilha();
            s.Empilha(1);
            s.Empilha(10);
            s.Empilha(100);
            Console.WriteLine(s.Desempilha());
            Console.WriteLine(s.Desempilha());
            Console.WriteLine(s.Desempilha());
            //Console.WriteLine(s.Desempilha()); //usado apenas para gerar a exceção.
        }
    }
}
