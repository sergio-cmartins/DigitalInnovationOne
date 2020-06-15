using System;
using System.Collections.Generic;
using CadastroAlunosSimples.Entities;
using System.Linq;

namespace CadastroAlunosSimples
{
    class Program
    {
        static void Main()
        {
            bool exitProgram = false;
            List<Aluno> alunos = new List<Aluno>();

            while (!exitProgram)
            {
                Console.Clear();
                Console.WriteLine("Informe a opção desejada:\n");
                Console.WriteLine("1 - Inserir novo Aluno");
                Console.WriteLine("2 - Listar Alunos");
                Console.WriteLine("3 - Calcular média geral");
                Console.WriteLine("\n<Digite qualquer outra opção para sair>\n");

                string inpMenu = Console.ReadLine();

                switch (inpMenu)
                {
                    case "1":
                        //TODO: Inserir Aluno
                        Console.Write("\nDigite o Nome do Aluno:");
                        string nome = Console.ReadLine();
                        Console.Write("Digite a nota: ");
                        if (!double.TryParse(Console.ReadLine(), out double nota))
                        {
                            throw new ArgumentException("Valor da Nota deve ser Decimal");
                        }
                        alunos.Add(new Aluno(nome, nota));
                        break;
                    case "2":
                        //TODO:Lista Alunos
                        Console.WriteLine("Listagem dos Alunos:\n\n");
                        foreach(Aluno lst in alunos)
                        {
                            Console.WriteLine("Aluno: {0}, nota: {1}", lst.Name, lst.Nota);
                        }
                        break;
                    case "3":
                        //media Final
                        double media = alunos.Average(x => x.Nota);
                        Console.WriteLine($"\nMedia das notas informadas: {media:F2}");
                        break;
                    default:
                        exitProgram = true;
                        Console.WriteLine("Saindo do programa...");
                        break;
                }
                Console.WriteLine("\n\nPressione qualquer tecla para continuar...");
                Console.ReadKey(true);
            } 
        }
    }
}
