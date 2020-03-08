import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Todo } from '../../model/Todo.mode';
import { TodoService } from '../../service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, AfterViewInit {

  todos : Todo[];
  message: string;

  constructor(private todoService: TodoService,
    private router: Router, private cdr: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.initializeTodos();
    this.cdr.detectChanges();

  }

  ngAfterViewInit() {
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

  addTodo(){
    this.router.navigate(['/viewTodo',0]);
  }

}
