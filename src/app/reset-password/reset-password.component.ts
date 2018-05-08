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
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
@Injectable()

export class ResetPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private logger:Logger,
    private http:Http) { }
    public PASSWORD_RESET_API = API_URL+ '/PasswordReset';

  selectedId : any;

  ngOnInit() {
    this.selectedId = this.route.snapshot.queryParamMap.get("id");
  }

  //Password Reset function
  resetPassword(form_val){
    console.log(form_val);
    if(form_val.password == form_val.confirmPassword)
    {
      var credentials = {"password":form_val.password, "uid":this.selectedId};
      return this.http.post(this.PASSWORD_RESET_API,credentials ).subscribe
      ( 
        data => {
            this.logger.log(data.json);
            this.router.navigate(['/signin']);
      });
    }else{
      console.log("Password dosent Match");
    }
  
  }
}



