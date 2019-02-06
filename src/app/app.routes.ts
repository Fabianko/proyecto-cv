import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InicioComponent } from './inicio/inicio.component';

const APP_ROUTES: Routes = [
{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
