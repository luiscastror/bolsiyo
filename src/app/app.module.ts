import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';


//UI
import { ButtonBolsiyoComponent } from './UI/components/button-bolsiyo/button-bolsiyo.component';
import { SearchComponent } from './UI/pages/search/search.component';
import { NavbarBolsiyoComponent } from './UI/components/navbar-bolsiyo/navbar-bolsiyo.component';
import { MainComponent } from './UI/pages/main/main.component';
import { DetailImageComponent } from './UI/components/modals/detail-image/detail-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonBolsiyoComponent,
    SearchComponent,
    NavbarBolsiyoComponent,
    MainComponent,
    DetailImageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
