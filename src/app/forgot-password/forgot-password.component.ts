import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
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
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

@Injectable()

export class ForgotPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private logger:Logger,
    private http:Http) { }
    public PASSWORD_RESET_API = API_URL+ '/ForgotPassword';

  selectedId : any;


  ngOnInit() {
    this.selectedId = this.route.snapshot.queryParamMap.get("id");
  }

  //Password Reset function
  forgotPassword(password){
    console.log(password);
    return this.http.post(this.PASSWORD_RESET_API, password).subscribe
    ( 
      data => {
          this.logger.log(data.json)
      alert("Successfully Login.");
    });
    //password and confirm password matches 
    // if(value.password == value.confirmPassword){
    //   console.log("matched");
    //   const req = this.http.post('localhost:4200', {
    //   body: value
    // })
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //     },
    //     err => {
    //       console.log("Error occured");
    //     }
    //   );
    // }else{
    //   alert("password doesn't matched");
    // }
    
  }

}
