import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoModule } from './component/todo.module';
import { BasicAuthenticationInterceptorService } from './security/basic-authentication-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    TodoModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: BasicAuthenticationInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
