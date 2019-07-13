import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome.component";
import { TodosComponent } from "./todos/todos.component";
import { ViewTodoComponent } from "./view-todo/view-todo.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [
      WelcomeComponent,
      TodosComponent,
      ViewTodoComponent
    ],
    imports: [
      AppRoutingModule,
      FormsModule,
      BrowserModule
    ]
  })
  export class TodoModule { }