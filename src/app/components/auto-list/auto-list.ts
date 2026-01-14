import { Component, inject, OnInit } from '@angular/core';
import { Auto } from '../../models/auto';
import { AutoService } from '../../services/auto';
import { AutoItem } from '../auto-item/auto-item';

@Component({
  selector: 'app-auto-list',
  imports: [AutoItem],
  templateUrl: './auto-list.html',
  styleUrl: './auto-list.css',
})
export class AutoList implements OnInit {
  autos: Auto[] = [];

  // alternativa injection 1
  // constructor(autoService: AutoService) {

  // }

  // alternativa injection 2
  autoService: AutoService = inject(AutoService);

  ngOnInit(): void {
    this.autos = this.autoService.getAutos();
  }

}
