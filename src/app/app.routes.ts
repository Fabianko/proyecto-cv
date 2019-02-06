import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const APP_ROUTES: Routes = [
{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
