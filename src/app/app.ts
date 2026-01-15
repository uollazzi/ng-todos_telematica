import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from "./components/todo-list/todo-list";
import { AutoList } from './components/auto-list/auto-list';
import { CarrelloMini } from "./components/carrello-mini/carrello-mini";
import { CarrelloFull } from "./components/carrello-full/carrello-full";

type Pagina = "todo" | "auto" | "carrello" | null;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoList, AutoList, CarrelloMini, CarrelloFull],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-todos');

  paginaSelezionata: Pagina = "carrello";

  selezionaPagina(pagina: Pagina) {
    this.paginaSelezionata = pagina;
  }
}
