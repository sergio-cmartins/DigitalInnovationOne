import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alerta } from '../../models/alerta';

@Component({
  selector: 'dio-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  alerta = {
    titulo: 'Titulo',
    descricao: 'Descricao Modal',
    btnPrimario: 'Sucesso',
    btnSecundario: 'Falha',
    corBtnPrimario: 'primary',
    corBtnSecundario: 'accent',
    possuiBtnSecundario: false
  } as Alerta;

  constructor(public  dialogRef: MatDialogRef<AlertaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Alerta) { }

  ngOnInit() {
    if (this.data) {
      this.alerta.titulo = this.data.titulo || this.alerta.titulo;
      this.alerta.descricao = this.data.descricao || this.alerta.descricao;
      this.alerta.btnPrimario = this.data.btnPrimario || this.alerta.btnPrimario;
      this.alerta.btnSecundario = this.data.btnSecundario || this.alerta.btnSecundario;
      this.alerta.corBtnPrimario = this.data.corBtnPrimario || this.alerta.corBtnPrimario;
      this.alerta.corBtnSecundario = this.data.corBtnSecundario || this.alerta.corBtnSecundario;
      this.alerta.possuiBtnSecundario = this.data.possuiBtnSecundario || this.alerta.possuiBtnSecundario;
    }
  }

}
