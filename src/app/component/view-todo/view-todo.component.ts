import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model/Todo.mode';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html'
})
export class ViewTodoComponent implements OnInit {

  // todo: Todo = new Todo(0,'',false, new Date());
  todoForm: FormGroup;

  constructor(private todoService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.initializeForm();
    let id: number = this.activatedRoute.snapshot.params['id'];
    if(id != 0){
      this.todoService.getTodo('vaibhav',id).subscribe(response=>{
        // this.todo = response;
        this.todoForm.patchValue({
          id: response.id,
          description: response.description,
          dueDate: new DatePipe('en-US').transform(new Date(response.dueDate),'yyyy-MM-dd')
        });
      });
    }
  }

  initializeForm(){
    this.todoForm = new FormGroup({
      id: new FormControl(0),
      description: new FormControl('', [Validators.required, Validators.minLength(4)]),
      dueDate: new FormControl('', Validators.required)
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
    this.cdr.detectChanges();
    this.router.navigate(['todos']);
  }

  submitForm(){
    if(this.todoForm.valid){
      this.save();
    }
  }

}
