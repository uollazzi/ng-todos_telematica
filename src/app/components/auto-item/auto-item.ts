import { Component, inject, Input } from '@angular/core';
import { Auto } from '../../models/auto';
import { CommonModule } from '@angular/common';
import { CarrelloService } from '../../services/carrello';

@Component({
  selector: 'app-auto-item',
  imports: [CommonModule],
  templateUrl: './auto-item.html',
  styleUrl: './auto-item.css',
})
export class AutoItem {
  @Input()
  auto?: Auto;

  carrelloService: CarrelloService = inject(CarrelloService);

  aggiungiACarrello() {
    this.carrelloService.aggiungiACarrello(this.auto!);
  }
}
