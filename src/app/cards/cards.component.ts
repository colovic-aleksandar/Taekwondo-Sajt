import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
Disable=false;

onClickPost()
{
  alert("kliknuo si!");
}
  constructor() {

    setTimeout(()=> 
    {
      this.Disable=true;
    },2000);
   }

  ngOnInit() {
  }

}
