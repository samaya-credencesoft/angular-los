import { Component, OnInit } from '@angular/core';
import { Logger } from '../../../services/common_services/logger.service';
import {Router} from '@angular/router';
import { AuthService } from '../../../services/common_services/auth.service';
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

  import {API_URL} from '../../../app.component';
  import '../../../../assets/js/material-bootstrap-wizard.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  public LOGIN_APPLICATION_API = API_URL+ '/loginUser';
  isLoggedIn :boolean = false ;

  constructor(private logger:Logger, private service: AuthService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(loginDetails){
    console.log(typeof(loginDetails));
    // Api call to validate user .
    this.service.validate_user(loginDetails,this.LOGIN_APPLICATION_API);    
  }

}