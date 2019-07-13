import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo.mode';
import { TodoService } from '../../service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos : Todo[];
  message: string;

  constructor(private todoService: TodoService,
    private router: Router) { }

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

  editTodo(id: number){
    this.router.navigate(['/viewTodo',id]);
  }

}
