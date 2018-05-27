import { LoanApplication } from './../../components/los_application/loanApplication';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http'
import { HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map'
import {API_URL} from '../../app.component';
import { Router } from '@angular/router';

@Injectable()
export class DashboardService {

  public UPDATE_LOAN_APPLICATION_API = API_URL+ '/updateLoanApplication';
  constructor(public http: Http,private router:Router) { }

  fetch_applicant_data(url)
  {
    return this.http.get(url).map(res => res.json());
  }

  public updateLoanApplication(loanApplication:LoanApplication) {
    return this.http.put(this.UPDATE_LOAN_APPLICATION_API, loanApplication);

};
  

}
