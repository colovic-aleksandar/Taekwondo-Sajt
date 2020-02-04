import { Component, OnInit } from '@angular/core';
import {PlacanjaService} from '../shared/placanja.service';
import {Placanja} from '../../app/shared/placanja';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-table-izmena',
  templateUrl: './table-izmena.component.html',
  styleUrls: ['./table-izmena.component.css'],

 
})

export class TableIzmenaComponent implements OnInit {
  private placanje:Placanja[];

  constructor(private _placanjaService:PlacanjaService, private router:Router) { }

  ngOnInit() {
    this.readPlacanjaa();
  }
  noviNeplatioc(event:any)
  {
    event.preventDefault();
    this._placanjaService.setter(new Placanja);
    this.router.navigate(['/dodajizmeni']);
  }
  deleteuj(_id:string)
  {
    this._placanjaService.deletePlacanja(_id).subscribe((res) =>{
      
    });
      
    
  }
  updateuj(placanja)
  {
    this._placanjaService.setter(placanja);
    this.router.navigate(['/dodajizmeni']);
  }
  readPlacanjaa()
  {  
    this._placanjaService.readPlacanja().subscribe(
      data=>{
        console.log(data);
        this.placanje=data['msg'];
      },

      error =>{
        console.log(error);
      }
    )
  }
}

