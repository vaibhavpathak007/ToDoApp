import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './common/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ErrorComponent } from './common/error/error.component';
import { TodosComponent } from './component/todos/todos.component';
import { LogoutComponent } from './common/logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ViewTodoComponent } from './component/view-todo/view-todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService] },
  { path: 'todos', component: TodosComponent, canActivate:[RouteGuardService]},
  { path: 'viewTodo/:id', component: ViewTodoComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
