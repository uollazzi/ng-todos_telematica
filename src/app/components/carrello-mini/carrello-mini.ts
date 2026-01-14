import { Component, inject } from '@angular/core';
import { CarrelloService } from '../../services/carrello';

@Component({
  selector: 'app-carrello-mini',
  imports: [],
  templateUrl: './carrello-mini.html',
  styleUrl: './carrello-mini.css',
})
export class CarrelloMini {
  carrelloService: CarrelloService = inject(CarrelloService);
}
