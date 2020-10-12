import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/TodoService/todo.service';
import { ActivatedRoute  } from "@angular/router";
import { ToDoModel } from "../Model/to-do-model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {


  ngOnInit() {
  }

}
