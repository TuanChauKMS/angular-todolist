import { Injectable } from '@angular/core';
import { Status } from '../Model/status-enum';
import { ToDoModel } from "../Model/to-do-model";

let TODOS = [
  { title: 'Install Angular CLI', isDone: true },
  { title: 'Style app', isDone: true },
  { title: 'Finish service functionality', isDone: false },
  { title: 'Setup API', isDone: false },
]

let NewTODOS: ToDoModel[] =[
  {title: "Task 1", description: "task 1 desc", status: Status.ToDo},
  // {title: "Task 2", description: "task 2 desc", status: true},
  // {title: "Task 3", description: "task 3 desc", status: false},
  // {title: "Task 4", description: "task 4 desc", status: true},
  // {title: "Task 5", description: "task 5 desc", status: true},
  // {title: "Task 6", description: "task 6 desc", status: false}
];

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor() { }

  get(query = '') {
    return new Promise(resolve => {
      let data;

      if (query === 'completed' || query === 'active'){
        // const isCompleted = query === 'completed';
        data = NewTODOS.filter(todo => todo.status === Status.ToDo);
      } else {
        data = NewTODOS;
      }

      resolve(data);
    });
  }

  getToDoList(query = '') {
    return new Promise(resolve => {
      let data;
      // if (query === 'completed' || query === 'active'){
        // const isCompleted = query === 'completed';
      data = NewTODOS.filter(todo => todo.status  === Status.ToDo);
      // } else {
      //   data = NewTODOS;
      // }

      resolve(data);
    });
  }

  AddNewToDo(object : ToDoModel)
  {
    return new Promise(resolve => {
      NewTODOS.push(object);
      resolve(object);
    });
  }

  put(changed) {
    return new Promise(resolve => {
      const index = TODOS.findIndex(todo => todo === changed);
      TODOS[index].title = changed.title;
      resolve(changed);
    });
  }
  delete(selected) {
    return new Promise(resolve => {
      const index = TODOS.findIndex(todo => todo === selected);
      TODOS.splice(index, 1);
      resolve(true);
    });
  }

  deleteCompleted() {
    return new Promise(resolve => {
      TODOS = TODOS.filter(todo => !todo.isDone);
      resolve(TODOS);
    });
  }

  toggle(selected) {
    selected.status = !selected.status;
    return Promise.resolve();
  }

  add(data) {
    return new Promise(resolve => {
      TODOS.push(data);
      resolve(data);
    });
  }

}
