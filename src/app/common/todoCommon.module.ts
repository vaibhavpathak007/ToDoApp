import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent } from "./error/error.component";
import { MenuComponent } from "./menu/menu.component";
import { LogoutComponent } from "./logout/logout.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [
      LoginComponent,
      ErrorComponent,
      MenuComponent,
      LogoutComponent,
    ],
    imports: [
      AppRoutingModule,
      FormsModule,
      BrowserModule],
    exports: [MenuComponent,AppRoutingModule]
  })
  export class TodoCommonModule { }