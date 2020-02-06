//built in imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {RouterModule} from '@angular/router';


//importi komponenata
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';
import { HeadlineComponent } from './headline/headline.component';
import { CardsComponent } from './post-create/cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TableDugoviComponent } from './uplata/table-dugovi/table-dugovi.component';
import { AdminComponent } from './admin/admin.component';
import { TableIzmenaComponent } from './table-izmena/table-izmena.component';
import { NoviKorisnikComponent } from './novi-korisnik/novi-korisnik.component';
import { NoviClanakComponent } from './post-create/novi-clanak/novi-clanak.component';
import{ PlacanjaService} from './shared/placanja.service';
import { ModalComponent } from './table-izmena/modal/modal.component';
import { UserService } from './shared/user.service';

//drugo

import {AuthGuard} from './auth/auth.guard';
import { from } from 'rxjs';
import { UplatiComponent } from './uplata/table-dugovi/uplati/uplati.component';
import { DodajKorisnikaComponent } from './dodaj-korisnika/dodaj-korisnika.component';
import { UpdateKorisnikaComponent } from './update-korisnika/update-korisnika.component';
import { PostCreateComponent } from './post-create/post-create.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    HeadlineComponent,
    CardsComponent,
    FooterComponent,
   routingComponents,
   TableDugoviComponent,
   AdminComponent,
   TableIzmenaComponent,
   NoviKorisnikComponent,
   NoviClanakComponent,
   ModalComponent,
   UplatiComponent,
   DodajKorisnikaComponent,
   UpdateKorisnikaComponent,
   PostCreateComponent,

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthGuard,PlacanjaService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
