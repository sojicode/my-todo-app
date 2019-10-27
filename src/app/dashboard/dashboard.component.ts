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

  constructor(public service: TodoItemService) {
    this.service = service;
    this.taskList = [ new Task ("Do the web application project", "urgent"),
                      new Task ("Visit my friend in Miami", "week"),
                      new Task ("Go for a walk with dog", "day"),
                      new Task ("Search for new desk chair", "week"),
                      new Task ("Check the email from K", "urgent")

                    ];
  }

  getList(): Task[] {
    return this.taskList;
  }

  ngOnInit() {
  }

}
