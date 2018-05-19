import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http'
import { HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DashboardService {

  constructor(public http: Http) { }

  fetch_applicant_data(url)
  {
    return this.http.get(url).map(res => res.json());
  }
  

}
