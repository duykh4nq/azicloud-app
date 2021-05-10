import { MainRoutingModule } from './main/main-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren: () => MainRoutingModule },
  { path: 'auth', loadChildren: () => AuthRoutingModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
