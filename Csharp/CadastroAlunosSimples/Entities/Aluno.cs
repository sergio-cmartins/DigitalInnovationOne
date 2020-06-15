namespace CadastroAlunosSimples.Entities
{
    class Aluno
    {
        public string Name { get; set; }
        public double Nota { get; set; }

        public Aluno(string name, double nota)
        {
            Name = name;
            Nota = nota;
        }
    }
}
