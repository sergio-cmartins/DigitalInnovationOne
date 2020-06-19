using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CursoMVC.Models
{
    public class Category
    {
        public int Id { get; set; }
        [Display(Name = "Descrição")]   public string Description { get; set; }

        // disabling product list, since each product already have the category ID
        //[Display(Name = "Produtos")]    public List<Product> Products { get; set; }
    }
}
