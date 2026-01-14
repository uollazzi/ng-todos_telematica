import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-item',
  imports: [FormsModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input()
  todo?: Todo;

  // output (evento) alternativa moderna
  // onRichiestaEliminazione = output<number>();

  // output (evento) alternativa legacy
  @Output()
  onRichiestaEliminazione = new EventEmitter<number>();

  richiediEliminazione() {
    this.onRichiestaEliminazione.emit(this.todo!.id);
  }
}
