import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/Todo.mode';
import { server } from '../properties/application.properties';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAllTodos(user: string){
   return this.http.get<Todo[]>(`${server}/user/${user}/todos`);  
  }

  getTodo(user: string, id: number){
    return this.http.get<Todo>(`${server}/user/${user}/todos/${id}`);  
  }

  saveTodo(user: string, todo: Todo){
    return this.http.post(`${server}/user/${user}/todos/`, todo);  
  }

  deleteTodo(user: string, id: number){
    return this.http.delete(`${server}/user/${user}/todos/${id}`);  
  }

  updateTodo(user: string, id: number, todo: Todo){
    return this.http.put(`${server}/user/${user}/todos/${id}`, todo);  
  }
}
