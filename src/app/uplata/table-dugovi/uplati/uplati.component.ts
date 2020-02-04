import { Component,AfterViewChecked,ViewChild,ElementRef, OnInit } from '@angular/core';
import { FormControl, Validators,NgForm } from "@angular/forms";
import{Router} from '@angular/router';
import { async } from '@angular/core/testing';
import {MailService} from '../../../shared/mail.service';
import { format } from 'url';
import { HttpClient } from "@angular/common/http";
declare let paypal:any;
@Component({
  selector: 'app-uplati',
  templateUrl: './uplati.component.html',
  styleUrls: ['./uplati.component.css']
})
export class UplatiComponent implements AfterViewChecked
{
 
  addScript:boolean=false;
  paypalLoad: boolean=true;
  konacnaSuma:number=1;
  paypalConfig={
    env:'sandbox',
    client:{
      sandbox:'AUPMw1v4M56okvza-CL9oHd-NSnxPnQgdm8n65LoDVoCh7fMvYTmDQcIQ_IDJURXKDO0FPA_clCEX9Ee',
      production:'<your-production-key here >'
    },
    commit:true,
    payment:(data,actions)=>{
      return data.payment.create({
        payment:{
          transactions:[
            {amount:{total:this.konacnaSuma,currency:'EUR'}}
          ]
        }
      });
    },
    onAuthorize:(data,actions)=>{
      return actions.payment.execute().then((payment)=>{
        //uradi nesto kad je uspesno izvrsena transakcija
      })
    }
  };

ngAfterViewChecked(): void
{
    if(!this.addScript)
    {
      this.addPaypalScript().then(()=>{
        paypal.Button.render(this.paypalConfig,'#paypal-checkout-btn');
        this.paypalLoad=false;

      })
    }
}

addPaypalScript()
{
  this.addScript  =true;
  return new Promise((resolve,reject) =>{
    let scripttagElement=document.createElement('script');
    scripttagElement.src='https://www.paypalobjects.com/api/checkout.js';
    scripttagElement.onload=resolve;
    document.body.appendChild(scripttagElement);
  })
}
constructor(public http: MailService) {}
send(form:NgForm)
{
  let mail={
    name:form.value,
    mesec:form.value,
    napomena:form.value
    

  }
  
  this.http.sendEmail('http://localhost:3000/sendmail',mail).subscribe(
    data=>{
      let res:any=data;
      console.log("uspesno poslat mail");
    },
    err=>{
      console.log(err);
      
    }
  );
}



}