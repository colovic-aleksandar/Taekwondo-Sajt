import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PlacanjaService} from '../shared/placanja.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dodaj-korisnika',
  templateUrl: './dodaj-korisnika.component.html',
  styleUrls: ['./dodaj-korisnika.component.css'],
  providers:[PlacanjaService]
})
export class DodajKorisnikaComponent implements OnInit {

  constructor(private placanjaService:PlacanjaService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
   
      this.placanjaService.createPlacanja(form.value).subscribe((res)=>{
        this.router.navigate(['/tabelaizmena']);
        
      });
    
  //  else
  //  {
  //   this.placanjaService.updatePlacanja(form.value).subscribe((res)=>{
  //     this.router.navigate(['/tabelaizmena']);
      
  //    });
  //  }
  }

}
