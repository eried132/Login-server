import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServerdataComponent} from './serverdata/serverdata.component';
import { LoginComponent} from './login/login.component';
import { AuthenticateGuard} from './authenticate.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'serverdata', component: ServerdataComponent, canActivate: [AuthenticateGuard]}
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
