import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PlacanjaService} from '../shared/placanja.service';
import {Router} from '@angular/router';
import{Placanja} from '../shared/placanja'

@Component({
  selector: 'app-update-korisnika',
  templateUrl: './update-korisnika.component.html',
  styleUrls: ['./update-korisnika.component.css'],
  providers:[PlacanjaService]
})
export class UpdateKorisnikaComponent implements OnInit {

  private placanja:Placanja;
  constructor(private placanjaService:PlacanjaService,private router:Router) { }

  ngOnInit() {
    this.placanja = this.placanjaService.getter();
    
  }
  header="";
  DodajiliIzmeni()
  {
    if(this.placanja._id==undefined)
    {
    this.placanjaService.createPlacanja(this.placanja).subscribe(
      data=>{
        console.log(data);
        
        this.router.navigate(['/tabelaizmena']);
        this.header="Kreiraj";
      },

      error =>{
        console.log(error);
      }
    )
    }
    else
    {
      this.placanjaService.updatePlacanja(this.placanja).subscribe(
        data=>{
          console.log(data);
         
          this.router.navigate(['/tabelaizmena']);
          this.header="Izmeni";
        },
  
        error =>{
          console.log(error);
        }
      )
    }
  }
}

