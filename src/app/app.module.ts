import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { InicioComponent } from './inicio/inicio.component';
import { SaludoComponent } from './saludo/saludo.component';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './cv/cv.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SaludoComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  exports: [BsDropdownModule, NgbModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
