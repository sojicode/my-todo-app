import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../todo-item/task.model';
import { TodoItemService } from '../todo-item/todo-item.service';
import { TodoListComponent } from '../todo-list/todo-list.component';


@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {

  @Input() myTaskList: Task[];
  tasks: Task[];


  constructor(public service: TodoItemService) {
    this.service = service;
   }

  addTodo(task: string): void {
    this.tasks = this.service.getTodo();
    this.myTaskList = this.service.addItemToArray(task, "urgent");
  }

  ngOnInit() {
  }

}
