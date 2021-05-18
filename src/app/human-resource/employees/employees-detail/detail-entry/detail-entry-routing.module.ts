import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EntryMainRoutingModule } from './entry-main/entry-main-routing.module';


const routes: Routes = [
  { path: '', loadChildren: () => EntryMainRoutingModule },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailEntryRoutingModule { }