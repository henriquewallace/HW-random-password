import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomPasswordComponent } from './random-password/random-password.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RandomPasswordComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
