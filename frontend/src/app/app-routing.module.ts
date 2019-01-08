import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManuComponent } from './manu/manu.component';
import { MakefoodAddComponent } from './makefood-add/makefood-add.component';
import { MakefoodListComponent } from './makefood-list/makefood-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },

  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'manu',
    component: ManuComponent
  },
  {
    path: 'app',
    component:AppComponent
  },
  
  { path: 'makefood-list',component : MakefoodListComponent },
  { path: 'makefood-add', component : MakefoodAddComponent}



];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],


  exports : [RouterModule]
})
export class AppRoutingModule { }
