import { Component, OnInit } from '@angular/core';
import {PlacanjaService} from '../../shared/placanja.service';
import {Placanja} from '../../shared/placanja';
import {Router} from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private placanja:Placanja;
    constructor(private placanjaService:PlacanjaService,private router:Router) { }
  
    ngOnInit() {
      this.placanja = this.placanjaService.getter();
    }

  DodajiliIzmeni()
  {
    this.placanjaService.createPlacanja(this.placanja).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/tabelaizmena']);
      },

      error =>{
        console.log(error);
      }
    )
  }
}

