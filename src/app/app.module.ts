import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppComponent } from './app.component';
import { FormularioComponent } from './users/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
