import { Injectable } from '@angular/core';
import { todo } from '../model/todo.type'; // Ensure correct import

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoItem: Array<todo> = [
    {
      title: 'angular',
      id: 1,
      userId: 1,
      completed: false, // Changed to boolean if applicable
    },
  ];

  constructor() {}
}
