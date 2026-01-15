import { Component, inject, OnInit } from '@angular/core';
import { CarrelloService } from '../../services/carrello';
import { Auto } from '../../models/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrello-full',
  imports: [CommonModule],
  templateUrl: './carrello-full.html',
  styleUrl: './carrello-full.css',
})
export class CarrelloFull implements OnInit {
  autos: Auto[] = [];

  carrelloService: CarrelloService = inject(CarrelloService);

  ngOnInit(): void {
    this.autos = this.carrelloService.autoNelCarrello;
  }
}
