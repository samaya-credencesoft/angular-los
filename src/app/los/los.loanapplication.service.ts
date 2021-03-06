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
  import { LoanApplication } from './../application/loan.Application';
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  import {API_URL} from '../app.component';
  @Injectable()
export class CustomerOnboardingService {
    constructor(
        private logger:Logger,
        private http:Http
    ){}

    public LOAN_APPLICATION_API = API_URL+ '/saveLoanApplication';
    public createLoanApplication(loanApplication:LoanApplication) {
        console.log(LoanApplication);
          return this.http.post(this.LOAN_APPLICATION_API, loanApplication).subscribe
          ( 
            data => {
                this.logger.log(data.json)
            alert("User created successfully.");
          });
  
    };
  
  
}








