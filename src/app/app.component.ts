import { Component, ViewChild } from '@angular/core';
import { ListItemComponent } from './Components/list-item/list-item.component';
import { ToDoModel } from './Model/to-do-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoList-project';

  @ViewChild('todo')
  public todoList: ListItemComponent;

  createNewItem(item: ToDoModel)
  {
    this.todoList.addItem(item);
  }
}

