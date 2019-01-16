import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos =[
  {id:1, description: "to learn angular"},
  {id:2, description: "to learn spring"},
  {id:3, description: "to learn java"}];

  constructor() { }

  ngOnInit() {
  }

}
