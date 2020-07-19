import { ConfigParams } from './../../shared/models/config-params';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { FilmesService } from './../../core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

  config: ConfigParams = {
    pagina: 0,
    limite: 4,
  };

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

    this.filtrosListagem.get('texto').valueChanges
    .pipe(debounceTime(400))
    .subscribe((val: string) => {
      this.config.pesquisa = val;
      this.resetarConsulta();
    });

    this.filtrosListagem.get('genero').valueChanges
    .subscribe((val: string) => {
      this.config.campo = {tipo: 'genero', valor: val};
      this.resetarConsulta();
    });

    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  private listarFilmes(): void {
    this.config.pagina++;
    this.filmeService.listar(this.config)
      .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  }

  private resetarConsulta(): void {
    this.config.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }

}
