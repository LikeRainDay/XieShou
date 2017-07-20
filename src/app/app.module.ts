import {BrowserModule} from '@angular/platform-browser';
import {EventEmitter, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginHttpComponent} from './login/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {ThirdloginComponent} from './login/third_login/thirdlogin.component';
import {RegisterComponent} from './login/register/register.component';
import {LogAnimComponent} from './login/log-anim/log-anim.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {trigger} from "@angular/animations";
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {UesrService} from "./login/user-service/user.service";
/*路由操作*/
const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginHttpComponent, data: {title: '登录'}},
  {path: 'register', component: LoginHttpComponent},
  {path: 'hero/:id', component: LoginHttpComponent},
  {path: '**', component: LoginHttpComponent}
]


@NgModule({
  declarations: [
    AppComponent, LoginHttpComponent, ThirdloginComponent, RegisterComponent, LogAnimComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule

  ],
  providers: [ UesrService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
