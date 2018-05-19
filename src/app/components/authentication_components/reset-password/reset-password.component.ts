import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
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
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
@Injectable()

export class ResetPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private logger:Logger,
  private http:Http) { }
  public PASSWORD_RESET_API = API_URL+ '/resetPassword';
  public UID_EXIST_API = API_URL + '/isUuidValid';

  uidExist : boolean ;
  selectedId : any;
  password : any;
  confirmPassword : any;
  passwordBlankMessage : any = false;
  passwordNotMatchedError : any = false;
  passwordMatchedSuccess : any = false;

  ngOnInit() {
    this.selectedId = this.router.url.split('/')[2];
  }

  pwd(passwordValue)
  {
    this.password = passwordValue;
    //console.log(this.password);
    this.passwordMatched();
  }
  
  confPwd(confirmPasswordValue)
  {
    this.confirmPassword = confirmPasswordValue;
    //console.log(this.confirmPassword);
    this.passwordMatched();
  }
  
  //Password Reset function
  resetPassword(form_val)
  {
    if(form_val.password == form_val.confirmPassword)
    {
      var credentials = {"password":form_val.password, "uuid":this.selectedId};
      
      //check here if the UID exist or not through a API call
      this.http.get(this.UID_EXIST_API+"/"+this.selectedId).map(res => res.json()).subscribe((response)=>{
       console.log(response);
        this.uidExist = response;
        if(this.uidExist === true)
        {
          return this.http.post(this.PASSWORD_RESET_API,credentials ).subscribe
          ( 
            data => {
                console.log(data.json);
                this.router.navigate(['/signin']);
          });
        }
        else
        {
          console.log("uid doesn't exist");
        }
      });
    }
    else
    {
      console.log("Password dosent Match");
    }
  
  }

  
  passwordMatched()
  {
    if(this.password === '' || this.confirmPassword === '')
    {
      this.passwordNotMatchedError = false;
      this.passwordMatchedSuccess = false;
    }
    else
    {
        if(this.password !== this.confirmPassword)
        {
          this.passwordNotMatchedError = true;
          this.passwordMatchedSuccess = false;
        }
        else
        {
          this.passwordMatchedSuccess = true;
          this.passwordNotMatchedError = false;
        }
    }
    
  }
}