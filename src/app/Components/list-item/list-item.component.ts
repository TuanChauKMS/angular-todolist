import { Component, OnInit, Input } from '@angular/core';
import { Status } from 'src/app/Model/status-enum';
import { ToDoModel } from 'src/app/Model/to-do-model';
import { TodoService } from 'src/app/TodoService/todo.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor(private todoService: TodoService) {
    this.todoService.getToDoList().then(todos => {
      this.todos = todos;
      console.log(this.todos);
    });
  }
  public todos;

  @Input() task: ToDoModel;

  status = Status;

  ngOnInit(): void {
  }

  getTodos(){
    return this.todoService.getToDoList().then(todos => {
      this.todos = todos;
    });
  }

  addItem(task: ToDoModel): void {
    console.log(task);
    this.todos.push(task);
  }
  getKeys(obj: any) : object {
    console.log(Object.values(status));
    return Object.values(status); }

}
