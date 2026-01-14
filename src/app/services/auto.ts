import { Injectable } from '@angular/core';
import { Auto } from '../models/auto';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  getAutos(): Auto[] {
    return [
      {
        id: 1,
        marca: "Fiat",
        modello: "Punto",
        prezzo: 5000
      },
      {
        id: 2,
        marca: "Lancia",
        modello: "Delta",
        prezzo: 15000
      }
    ]
  }
}
