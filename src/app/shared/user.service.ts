import { Injectable } from '@angular/core';
import {User} from './user.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = 
  {
    username:'',
    password:'',
    permission:'Clan'
    
  };
  //http metode 
noAuthHeader= { headers:new HttpHeaders({'NoAuth':'True' })};
  constructor(private http: HttpClient) { }
  postUser(user:User)
  {

    return this.http.post(environment.BaseUrl+'/register',user,this.noAuthHeader );
  }

  login(authCredentials)
  {
    return this.http.post(environment.BaseUrl + '/authenticate',authCredentials,this.noAuthHeader );
  }

  getUserProfile()
  {
    return this.http.get(environment.BaseUrl + '/korisnik');
  }


//helper metode
  setToken (token: string)
  {
    localStorage.setItem('token', token);
  }

  getToken()
  {
    localStorage.getItem('token');
  }
  deleteToken()
  {
    localStorage.removeItem('token');
  }

  getUserPayload()
  {
    var token = localStorage.getItem('token');
    if(token)
    {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else 
    {
      return null;
    }
      
  }

  isLoggedIn()
  {
    var userPayload = this.getUserPayload();
    if(userPayload)
    return userPayload.exp >Date.now()/1000;
    else 
    {
      return false;
    }
  }

}

