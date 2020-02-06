import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login.component';
import {UplataComponent } from './uplata/uplata.component';
import {AboutComponent } from './about/about.component';
import {HomeComponent } from './home/home.component';
import {AdminComponent } from './admin/admin.component';
import { TableIzmenaComponent } from './table-izmena/table-izmena.component';
import { NoviKorisnikComponent } from './novi-korisnik/novi-korisnik.component';
import { NoviClanakComponent } from './post-create/novi-clanak/novi-clanak.component';
import {UplatiComponent} from './uplata/table-dugovi/uplati/uplati.component';
import{DodajKorisnikaComponent} from './dodaj-korisnika/dodaj-korisnika.component';
import{UpdateKorisnikaComponent} from './update-korisnika/update-korisnika.component'
import{PostCreateComponent} from './post-create/post-create.component'


import {AuthGuard} from './auth/auth.guard';

const routes: Routes = 
[ {path:'login', component: LoginComponent},
{path:'uplata', component: UplataComponent,canActivate:[AuthGuard]},
{path:'about', component: AboutComponent},
{path:'', component: HomeComponent},
{path:'admin', component: AdminComponent,canActivate:[AuthGuard]},
{path:'tabelaizmena', component: TableIzmenaComponent,canActivate:[AuthGuard]},
{path:'novikorisnik', component: NoviKorisnikComponent,canActivate:[AuthGuard]},
{path:'noviclanak', component: PostCreateComponent,canActivate:[AuthGuard]},
{path:'izmeniclanak/:postId', component: PostCreateComponent,canActivate:[AuthGuard]},
{path:'uplati', component:UplatiComponent,canActivate:[AuthGuard]},
{path:'dodajizmeni', component: DodajKorisnikaComponent,canActivate:[AuthGuard]},
{path:'dodajkorisnika', component: UpdateKorisnikaComponent,canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,UplataComponent,AboutComponent,HomeComponent,AdminComponent,NoviClanakComponent,NoviKorisnikComponent,TableIzmenaComponent,DodajKorisnikaComponent,UpdateKorisnikaComponent];
