import { DeatilRoutingModule } from './detail/deatil-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => HomeRoutingModule },
  { path: 'detail', loadChildren: () => DeatilRoutingModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
