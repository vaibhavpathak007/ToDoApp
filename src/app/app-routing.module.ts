import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path : '', redirectTo:'login', pathMatch:'full'},
  {path : 'login', component: LoginComponent},
  {path : 'welcome/:name', component: WelcomeComponent},
  {path : 'todos', component: TodosComponent},
  {path : '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
