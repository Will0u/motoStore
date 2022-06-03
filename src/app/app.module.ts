import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TypeComponent } from './components/type/type.component';
import { MarqueComponent } from './components/marque/marque.component';
import { DetailMarqueComponent } from './components/marque/detail-marque/detail-marque.component';
import { DetailTypeComponent } from './components/type/detail-type/detail-type.component';
import { DetailMotoComponent } from './components/detail-moto/detail-moto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlashCardComponent } from './components/home/flash-card/flash-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypeComponent,
    MarqueComponent,
    DetailMarqueComponent,
    DetailTypeComponent,
    DetailMotoComponent,
    NavbarComponent,
    FlashCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
