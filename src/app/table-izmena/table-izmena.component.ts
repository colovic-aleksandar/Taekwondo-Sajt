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
  isShow = true;
  isDisabled=true;
  isEnabled=true;
  isDisabledd=false;
  isEnabledd=false;
  constructor(private placanjaService:PlacanjaService, private router:Router) { }

  ngOnInit() {
    this.readPlacanjaa();
    this.refresh();
    
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.placanjaService.placanja = {
      _id : "",
    imeClana: "",
    januar : "",
    februar: "",
    mart: "",
    april:"",
    maj: "",
    jun:"",
   septembar: "",
   oktobar: "",
    novembar: "",
    decembar : ""
      
    }
  }
  refresh() {
    this.placanjaService.readPlacanja().subscribe((res) => {
      this.placanjaService.neplatioci = res as Placanja[];
    });
  }
  noviNeplatioc(event:any)
  {
    event.preventDefault();
    this.placanjaService.setter(new Placanja);
    this.isShow = !this.isShow;
  }
  deleteuj(_id:string,form:NgForm)
  {
    this.placanjaService.deletePlacanja(_id).subscribe((res) =>{
   
      
    });
  
    
  }
  adduj(placanja:Placanja)
  {
    this.placanjaService.placanja=placanja;
    this.isDisabled=!this.isDisabled;
    this.isEnabledd=!this.isEnabledd;
    this.isShow = !this.isShow;
    
  }
  updateuj(placanja:Placanja)
  {
    this.placanjaService.placanja=placanja;
    this.isEnabled=!this.isEnabled;
    this.isDisabledd=!this.isDisabledd;
    this.isShow = !this.isShow;
    
  }

  onSubmit(form:NgForm)
  {
      this.placanjaService.createPlacanja(form.value).subscribe((res)=>{
        this.isShow = !this.isShow;
     
      });
    
  
  }

  onSubmit1(form:NgForm)
  {
   
    this.placanjaService.updatePlacanja(form.value).subscribe((res)=>{
      this.isShow = !this.isShow;
      
      
     });
 
  }



  readPlacanjaa()
  {  
    this.placanjaService.readPlacanja().subscribe(
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

