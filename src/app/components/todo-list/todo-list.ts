import { Component } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todos: Todo[] = [
    {
      id: 1,
      testo: "Fare la spesa",
      completato: false
    },
    {
      id: 2,
      testo: "Portare fuori il cane",
      completato: false
    }
  ];
}
