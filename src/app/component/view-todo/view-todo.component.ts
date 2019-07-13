import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model/Todo.mode';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {

  todo: Todo = new Todo(0,'',false,new Date());

  constructor(private todoService: TodoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.todoService.getTodo('vaibhav',id).subscribe(response=>{
      this.todo = response;
    });
  }

}