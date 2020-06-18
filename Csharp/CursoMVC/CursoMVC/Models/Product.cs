using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CursoMVC.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Display(Name = "Descrição")] public string Descricao { get; set; }
        [Display(Name = "Quantidade")] public int Quantity { get; set; }
        public int CategoryId { get; set; }
        [Display(Name = "Categoria")] public Category Category { get; set; }

    }
}
