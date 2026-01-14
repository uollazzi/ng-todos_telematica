import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoItem } from "../todo-item/todo-item";
import { CommonModule } from '@angular/common';
import { TodoAdd } from "../todo-add/todo-add";

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem, CommonModule, TodoAdd],
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
      completato: true
    }
  ];

  eliminaTodo(id: number) {
    // rimuovere un elemento da array: alternativa 1
    // let todo = this.todos.find(t => t.id == id);

    // if (todo) {
    //   let i = this.todos.indexOf(todo);

    //   if (i > -1) {
    //     this.todos.splice(i, 1);
    //   }
    // }

    // rimuovere un elemento da array: alternativa 2
    this.todos = this.todos.filter(t => t.id != id);
  }

  inserisciNuovoTodo(testo: string) {
    // qui ci sarà la richesta ajax al backend
    const ids: number[] = this.todos.map(t => t.id);
    const nuovoId = Math.max(...ids) + 1;

    const nuovoTodo: Todo = {
      id: nuovoId,
      testo: testo,
      completato: false
    }

    this.todos.push(nuovoTodo);
  }
}
