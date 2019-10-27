import { Task } from './task.model';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class TodoItemService {
  
  tasks: Task[];
  urgent: boolean;
  days:boolean;
  week: boolean;
  dueDate: string;

  constructor() { 
    this.urgent = false;
    this.days = false;
    this.week = false;
  
  }
  addItemToArray(ItemArr?: Task[], text?:string, type?: string): Task[]{
    this.tasks = ItemArr;
    const newTask = new Task(text, type);
    this.tasks.push(newTask);
    return this.tasks;
    
  }
   
   updateMyTask(selectedDate?: string): [boolean, boolean, boolean] {
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
    return [this.urgent, this.days, this.week];
  }
   

  // tasks: AngularFirestoreCollection<Task>;

  // private taskDoc: AngularFirestoreDocument<Task>;


  // constructor(private db: AngularFirestore) {
  //   this.tasks = db.collection<Task>(config.collection_endpoint);
  // }

  // addTask(task){
  //   this.tasks.add(task);
  // }

  // updateTask(id, update){
  //   this.taskDoc = this.db.doc<Task>(`${config.collection_endpoint}/${id}`);
  //   this.taskDoc.update(update);
  // }

  // deleteTask(id) {
  //   this.taskDoc = this.db.doc<Task>(`${config.collection_endpoint}/${id}`);
  //   this.taskDoc.delete();
  // }


}
