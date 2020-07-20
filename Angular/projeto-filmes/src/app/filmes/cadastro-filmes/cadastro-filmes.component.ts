import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Alerta } from './../../shared/models/alerta';
import { AlertaComponent } from './../../shared/components/alerta/alerta.component';
import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';
import { Filme } from 'src/app/shared/models/filme';
import { FilmesService } from './../../core/filmes.service';
import { triggerAsyncId } from 'async_hooks';

@Component({
  selector: 'dio-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  id: number;
  cadastro: FormGroup;
  generos: Array<string>;

  constructor(
    public validacao: ValidarCamposService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private filmeService: FilmesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  // get f() {
  //   return this.cadastro.controls;
  // }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.filmeService.visualizar(this.id)
      .subscribe((filme: Filme) => this.criarFormulario(filme));
    } else {
      this.criarFormulario(this.criarFilmeEmBranco());
    }

    this.generos = [
      'Ação',
      'Aventura',
      'Ficção Científica',
      'Romance',
      'Terror',
      'Comédia',
      'Drama'
    ];

  }

  submit(): void {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) {
      return;
    }

    const filme = this.cadastro.getRawValue() as Filme;
    if (this.id) {
      filme.id = this.id;
      this.editar(filme);
    } else {
      this.salvar(filme);
    }


  }

  reiniciarForm(): void {
    this.cadastro.reset();
  }

  private criarFormulario(filme: Filme): void {
    this.cadastro = this.fb.group({
      titulo: [filme.titulo, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlFoto: [filme.urlFoto, [Validators.minLength(10)]],
      dtLancamento: [filme.dtLancamento, [Validators.required]],
      descricao: [filme.descricao],
      nota: [filme.nota, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: [filme.urlIMDb, [Validators.minLength(10)]],
      genero: [filme.genero, [Validators.required]]
    });
  }

  private criarFilmeEmBranco(): Filme {
    return {
      id: null,
      titulo: null,
      urlFoto: null,
      dtLancamento: null,
      descricao: null,
      nota: null,
      urlIMDb: null,
      genero: null
    } as Filme;
  }

  private salvar(filme: Filme): void {
    this.filmeService.salvar(filme).subscribe(
      () => {
        const config = {
          data:  {
            titulo : 'Sucesso!',
            descricao : 'Filme Cadastrado com sucesso',
            btnPrimario : 'Ir para listagem',
            possuiBtnSecundario: true,
            btnSecundario : 'Cadastrar outro filme',
            corBtnSecundario : 'primary'
          } as Alerta
        };
        const dialogRef = this.dialog.open(AlertaComponent, config);
        dialogRef.afterClosed().subscribe((opcao: boolean) => {
          if (opcao) {
            this.router.navigateByUrl('filmes');
          } else {
            this.reiniciarForm();
          }
        });
      },
      () => {
        const config = {
          data:  {
            titulo : 'Erro ao Salvar!',
            descricao : 'Ocorreu um Erro ao Salvar o Filme, por favor tente novamente mais tarde..',
            btnPrimario : 'Fechar',
            corBtnPrimario: 'warn'
          } as Alerta
        };
        const dialogRef = this.dialog.open(AlertaComponent, config);
      }
    );
  }

  private editar(filme: Filme): void {
    this.filmeService.editar(filme).subscribe(
      () => {
        const config = {
          data:  {
            titulo : 'Sucesso!',
            descricao : 'Filme Atualizado com sucesso',
            btnPrimario : 'Ir para listagem',
            possuiBtnSecundario: false,
          } as Alerta
        };
        const dialogRef = this.dialog.open(AlertaComponent, config);
        dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl('filmes'));
      },
      () => {
        const config = {
          data:  {
            titulo : 'Erro ao Editar!',
            descricao : 'Ocorreu um Erro ao Editar o Filme, por favor tente novamente mais tarde..',
            btnPrimario : 'Fechar',
            corBtnPrimario: 'warn'
          } as Alerta
        };
        const dialogRef = this.dialog.open(AlertaComponent, config);
      }
    );
  }

}
