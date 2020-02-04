import { Injectable } from '@angular/core';
import {Mail} from './mail.model'
import { HttpClient, HttpRequest } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MailService {
  constructor(private http:HttpClient) { }
  poslatMail: Mail=
  {
    ime:"",
    mesec:"",
    napomena:""

  }


sendEmail(url,data)
{
  return this.http.post(url,data);
}

}
