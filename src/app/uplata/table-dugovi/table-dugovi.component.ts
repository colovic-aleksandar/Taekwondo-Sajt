import { Component, OnInit } from '@angular/core';
import {PlacanjaService} from '../../shared/placanja.service'
import {Placanja} from '../../shared/placanja';
import {Router} from '@angular/router';
@Component({
  selector: 'app-table-dugovi',
  templateUrl: './table-dugovi.component.html',
  styleUrls: ['./table-dugovi.component.css']
})

export class TableDugoviComponent implements OnInit {

  private placanje:Placanja[];
 
  constructor(private _placanjaService:PlacanjaService, private router:Router) { }

  ngOnInit() {
    this.readPlacanjaa();
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
