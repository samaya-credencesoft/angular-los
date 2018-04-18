import { Component, OnInit } from '@angular/core';
import { Logger } from './../common/logger.service';
import {
    Http,
    Response,
    RequestOptions,
    Headers,
    HttpModule,
  
  } from '@angular/http';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { HttpErrorResponse } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs/Observable';
  
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  import {API_URL} from '../app.component';
  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {

  constructor(
    private logger:Logger,
    private http:Http
  ) { }
  public LOGIN_APPLICATION_API = API_URL+ '/LoginApplication';


  ngOnInit() {
  }

  onLogin(loginDetails){
    console.log(loginDetails);
    return this.http.post(this.LOGIN_APPLICATION_API, loginDetails).subscribe
    ( 
      data => {
          this.logger.log(data.json)
      alert("Successfully Login.");
    });

  }

}
