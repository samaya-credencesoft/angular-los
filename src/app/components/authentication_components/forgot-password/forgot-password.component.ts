import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Logger } from '../../../services/common_services/logger.service';
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

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

@Injectable()

export class ForgotPasswordComponent implements OnInit {
 
  constructor(private route: ActivatedRoute,private router: Router,private logger:Logger,
    private http:Http) { }
    public FORGOT_PASSWORD_API = API_URL+ '/forgotPassword';
   
  password : any;
  email : boolean;
  //emailPattern = "/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/";


ngOnInit() {
   
  }
 

  //forgot password function
  forgotPassword(email_val)
  {
    // console.log(API_URL);
    // console.log(email_val);
      this.http.post(this.FORGOT_PASSWORD_API, email_val).map(res => res.json()).subscribe((response)=>{
        console.log(response);
        // if(response.result === "success")
        // {
        //   console.log("reset password link sent to your email id");
        //   this.router.navigate(['signin']);
        // }
        // else
        // {
        //   console.log("email id doesn't exist");
        // }
      });

  }  
}
