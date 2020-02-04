import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}  from '@angular/common/http';
import {Placanja} from '../../app/shared/placanja';
import { setupTestingRouter } from '@angular/router/testing';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlacanjaService {
  public placanja:Placanja;
  neplatioci:Placanja[];
private baseUri:string="http://localhost:3000";
private headers=new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  createUser: Placanja = 
  {
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

createPlacanja(placanja:Placanja){
  return this.http.post(this.baseUri+'/create',placanja,{headers:this.headers});
}

readPlacanja(){
  return this.http.get(this.baseUri+'/read',{headers:this.headers});
}

updatePlacanja(placanja:Placanja){
  return this.http.put(this.baseUri+'/update',placanja,{headers:this.headers});
}

deletePlacanja(_id:string){
  return this.http.delete(this.baseUri+'/delete',{headers:this.headers});
}

setter(placanja:Placanja)
{
  this.placanja=placanja;
}

getter()
{
  return this.placanja;
}

}

