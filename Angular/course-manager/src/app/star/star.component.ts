import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

  @Input() // permite que a variavel receba valores por outro componente
  rating = 0; // não devemos tipar variaveis que são inicialmente inferidas por tipos primitivos
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 14.85;  // 14.85 é o numero de pixels de cada estrela
  }

}
