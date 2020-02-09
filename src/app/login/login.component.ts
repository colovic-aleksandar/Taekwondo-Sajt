import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import{Router} from '@angular/router';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router: Router) { 

  }


  model ={
    username:'',
    password:''
  };

  serverErrorMessages:string;

  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/uplata');
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/uplata');
        
      },
      err => {
        this.serverErrorMessages = err.error.message;
        console.log("neuspesno logovanje");
      }
    );
  }

}
