import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
 

  
  <app-slider> 
      
  </app-slider>
  <div class="container">
      <app-headline></app-headline>
      <div class="main">
          <app-cards></app-cards>
      </div>
  
  </div>   
  <app-footer></app-footer>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
