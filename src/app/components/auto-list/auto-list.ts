import { Component, inject, OnInit } from '@angular/core';
import { Auto } from '../../models/auto';
import { AutoService } from '../../services/auto';

@Component({
  selector: 'app-auto-list',
  imports: [],
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
    setTimeout(() => {
      this.autos = this.autoService.getAutos();
    }, 3000);

  }

}
