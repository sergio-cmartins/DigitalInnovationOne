import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FilmesService } from './../../core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly qtdPagina = 4;
  pagina = 0;
  filmes: Filme[] = [];
  filtrosListagem: FormGroup;
  generos: Array<string>;
  texto: string;
  genero: string;


  constructor(
    private filmeService: FilmesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.filtrosListagem = this.fb.group({
      texto: [''],
      genero: ['']
    });

    this.generos = [
      'Ação',
      'Aventura',
      'Ficção Científica',
      'Romance',
      'Terror',
      'Comédia',
      'Drama'
    ];

    this.filtrosListagem.get('texto').valueChanges.subscribe((val: string) => {
      this.texto = val;
      this.resetarConsulta();
    });

    this.filtrosListagem.get('genero').valueChanges.subscribe((val: string) => {
      this.genero = val;
      this.resetarConsulta();
    });

    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  private listarFilmes(): void {
    this.pagina++;
    this.filmeService.listar(this.pagina, this.qtdPagina, this.texto, this.genero)
      .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  }

  private resetarConsulta(): void {
    this.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }

}
