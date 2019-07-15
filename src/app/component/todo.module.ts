import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome.component";
import { TodosComponent } from "./todos/todos.component";
import { ViewTodoComponent } from "./view-todo/view-todo.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
    declarations: [
      WelcomeComponent,
      TodosComponent,
      ViewTodoComponent,
      ErrorComponent,
      LoginComponent,
      LogoutComponent,
      MenuComponent
    ],
    imports: [
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      BrowserModule
    ],
    exports: [AppRoutingModule, MenuComponent] // Because we are using <router-Outlet> and <app-menu> in appComponent
  })
  export class TodoModule { }