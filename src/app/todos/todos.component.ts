import { Component, OnInit } from '@angular/core';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isCompleted: boolean,
    public dueDate: Date) {
  }
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [
    new Todo(1, "to learn angular", true, new Date()),
    new Todo(2, "to learn spring", false, new Date()),
    new Todo(3, "to learn java", false, new Date())
  ];

  constructor() { }

  ngOnInit() {
  }

}
