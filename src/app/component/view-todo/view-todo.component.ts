import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model/Todo.mode';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {

  // todo: Todo = new Todo(0,'',false, new Date());
  todoForm: FormGroup;

  constructor(private todoService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initializeForm();
    let id: number = this.activatedRoute.snapshot.params['id'];
    if(id != 0){
      this.todoService.getTodo('vaibhav',id).subscribe(response=>{
        // this.todo = response;
        this.todoForm.patchValue({
          id: response.id,
          description: response.description,
          date: new DatePipe('en-US').transform(new Date(response.dueDate),'yyyy-MM-dd')
        });
      });
    }
  }

  initializeForm(){
    this.todoForm = new FormGroup({
      id: new FormControl(''),
      description: new FormControl(''),
      date: new FormControl('')
    });
  }

  save(){
    if(this.todoForm.get('id').value === 0){
      this.todoService.saveTodo('vaibhav',this.todoForm.value).subscribe(response=>{
        console.log(response);
      });
    }
    else{
      this.todoService.updateTodo('vaibhav',this.todoForm.get('id').value,this.todoForm.value).subscribe(response=>{
        console.log(response);
      });
    }
    this.router.navigate(['todos']);
  }

}
