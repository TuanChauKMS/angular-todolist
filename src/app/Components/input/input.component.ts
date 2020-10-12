import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoModel } from 'src/app/Model/to-do-model';
import { TodoService } from 'src/app/TodoService/todo.service';
import { Status } from "../../Model/status-enum";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  inputForm : FormGroup;
  public newTodo = new ToDoModel('','',Status.ToDo);

  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.inputForm = this.fb.group({
      title:[''],
      desc:['', [Validators.required, Validators.maxLength(250)]],
    });
   }

  @Output()
  createTodoEvent = new EventEmitter<ToDoModel>();

  ngOnInit(): void {
  }

  public ToDoObject : ToDoModel
  public ToDoList : ToDoModel[];

  CreateNewItem(){
    var todoItem = new ToDoModel(this.inputForm.value.title, this.inputForm.value.desc, Status.ToDo);
    this.todoService.AddNewToDo(todoItem).then(() => {
    }).then(() => {
      this.newTodo; // clear input form value
      this.createTodoEvent.emit(todoItem);
    });
  }

  }
