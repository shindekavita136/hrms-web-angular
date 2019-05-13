import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
      path : 'register', component : RegisterComponent
    },
    {
      path : 'login', component : LoginComponent
    },
    { 
      path: '', component : HomeComponent   
    },
    { 
      path: 'home', component : HomeComponent   
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
