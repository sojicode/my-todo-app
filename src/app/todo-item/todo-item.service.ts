import { Task } from './task.model';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { Injectable, Output } from '@angular/core';
import { EventEmitter } from 'events';


@Injectable({
  providedIn: 'root'
})

export class TodoItemService {
  
  tasks: Task[];
  urgent: boolean;
  days:boolean;
  week: boolean;
  remove: boolean;
  dueDate: string;
  todoItem: string;
  flag: boolean;

  constructor() { 
    this.urgent = false;
    this.days = false;
    this.week = false;
    this.remove = false;

  }

  createTodo(){
    this.tasks = [ 
      new Task ("Do the web application project", "urgent"),
      new Task ("Visit my friend in Miami", "week"),
      new Task ("Go for a walk with dog", "day"),
      new Task ("Search for new desk chair", "week"),
      new Task ("Check the email from K", "urgent")
  ];

  }

  getTodo(): Task[] {
    return this.tasks;
  }

  addItemToArray(text?:string, type?: string): Task[]{
    this.tasks = this.getTodo();
    const newTask = new Task(text, type);
    this.tasks.push(newTask);
    return this.tasks;
    
  }
   
   updateMyTask(selectedDate?: string): [boolean, boolean, boolean, boolean] {
    this.tasks = this.getTodo();
    this.dueDate = selectedDate;
    if (this.dueDate == "urgent") {
      this.urgent = true;
      this.days = false;
      this.week = false;
  
    }
    else if (this.dueDate == "days") {
      this.days = true;
      this.urgent = false;
      this.week = false;

    }
    else if (this.dueDate == "week")  {
      this.week = true;
      this.urgent = false;
      this.days = false;
 
    }

    return [this.urgent, this.days, this.week, this.remove];
  }

  deleteMyTask(selectItem: string): Task[]{

    // console.log(selectItem);
    this.tasks = this.getTodo();

  
    for (var i = 0; i < this.tasks.length; i++){

      if(selectItem == this.tasks[i].todoItem) {
        // console.log(this.tasks[i].todoItem); 
        this.tasks.splice(i, 1);
      }
    
      }
      return this.tasks;
  }
  
  
}



