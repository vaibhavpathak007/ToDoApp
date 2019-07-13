import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/Todo.mode';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAllTodos(user: string){
   return this.http.get<Todo[]>(`http://localhost:8080/user/${user}/todos`);  
  }

  getTodo(user: string, id: number){
    return this.http.get<Todo>(`http://localhost:8080/user/${user}/todos/${id}`);  
  }

  deleteTodo(user: string, id: number){
    return this.http.delete(`http://localhost:8080/user/${user}/todos/${id}`);  
  }
}
