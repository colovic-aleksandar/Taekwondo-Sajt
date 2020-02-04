import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-novi-korisnik',
  templateUrl: './novi-korisnik.component.html',
  styleUrls: ['./novi-korisnik.component.css']
})
export class NoviKorisnikComponent implements OnInit {
showSuccessMessage:boolean;
serverErrorMessage:String;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this.userService.postUser(form.value).subscribe(
      res =>{

        this.showSuccessMessage=true;
        setTimeout(()=>this.showSuccessMessage=false,4000);
        setTimeout(()=>this.router.navigate(['/admin']),750);
        
        this.resetForm(form);
        
      },
      err=>{
        if(err.status==422)
        {
          this.serverErrorMessage=err.error.join('</br>' + 'Neuspesna Registracija');


        }
        else
        {
          this.serverErrorMessage='Nesto nije uredu, kontaktirajte admina!';
        }
        
      }
    );
  }

  resetForm(form:NgForm){
    this.userService.selectedUser={
      username:'',
      password:'',
      permission:'Clan'
      
      
    };
    form.resetForm();
    this.serverErrorMessage="";
    
  }


}
