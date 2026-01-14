import { Injectable } from '@angular/core';
import { Auto } from '../models/auto';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  autoNelCarrello: Auto[] = [];

  aggiungiACarrello(auto: Auto) {
    this.autoNelCarrello.push(auto);
  }

  svuotaCarrello() {
    this.autoNelCarrello = [];
  }
}
