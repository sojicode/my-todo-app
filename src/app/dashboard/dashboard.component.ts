import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task } from '../todo-item/task.model';
import { TodoItemService } from '../todo-item/todo-item.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskList: Task[];

  constructor(public service: TodoItemService ){
    service.createTodo();
    this.taskList = service.getTodo();
 
  }

  getList(): Task[]{
    this.taskList = this.service.getTodo();
    return this.taskList;
  }


  ngOnInit() {
  }

}
