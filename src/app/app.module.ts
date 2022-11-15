import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

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
    MatDialogModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
