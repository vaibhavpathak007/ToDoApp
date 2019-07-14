import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model/Todo.mode';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {

  todo: Todo = new Todo(0,'',false, new Date());

  constructor(private todoService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id: number = this.activatedRoute.snapshot.params['id'];
    if(id != 0){
      this.todoService.getTodo('vaibhav',id).subscribe(response=>{
        this.todo = response;
      });
    }
  }

  save(){
    if(this.todo.id === 0){
      this.todoService.saveTodo('vaibhav',this.todo).subscribe(response=>{
        console.log(response);
      });
    }
    else{
      this.todoService.updateTodo('vaibhav',this.todo.id,this.todo).subscribe(response=>{
        console.log(response);
      });
    }
    this.router.navigate(['todos']);
  }

}
