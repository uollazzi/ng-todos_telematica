import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from "./components/todo-list/todo-list";
import { AutoList } from './components/auto-list/auto-list';

type Pagina = "todo" | "auto" | null;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoList, AutoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-todos');

  paginaSelezionata: Pagina = "auto";

  selezionaPagina(pagina: Pagina) {
    this.paginaSelezionata = pagina;
  }
}
