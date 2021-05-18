import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HumanResourceRoutingModule } from './human-resource/human-resource-routing.module';
import { AuthGuard } from './_helpers/auth.guard';




const routes: Routes = [
  { path: '', loadChildren: () => HumanResourceRoutingModule },
  { path: 'login', component: AuthComponent }
  // { path: '', loadChildren: () => import('./human-resource/human-resource.module').then(module => module.HumanResourceModule) },

  // { path: 'login', component: AuthComponent },

  // { path: '**', redirectTo: 'HumanResource' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
