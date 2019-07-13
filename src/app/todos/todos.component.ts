import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo.mode';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos : Todo[];
  message: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.initializeTodos();
  }

  initializeTodos(){
    this.todoService.getAllTodos('vaibhav').subscribe(response=>{
      this.todos = response;
    });
  }

  deteleTodo(id: number){
      this.todoService.deleteTodo('vaibhav',id).subscribe(response=>{
        this.initializeTodos();
        this.message= "Successfuly Deleted";
      },
      error=>{
        this.message= "Error in Delete";
      });
  }

}
