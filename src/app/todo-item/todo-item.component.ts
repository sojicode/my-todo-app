import { Component, OnInit, Input } from '@angular/core';
import { TodoItemService} from '../todo-item/todo-item.service';
import { Task } from '../todo-item/task.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() mytask: Task;
  urgent: boolean;
  days: boolean;
  week: boolean;

  constructor(public service: TodoItemService) { 
    this.service = service;
  }

  updateTodo(type: string): void {
    [this.urgent, this.days, this.week] = this.service.updateMyTask(type);
  
  }

  ngOnInit() {
  }

}
