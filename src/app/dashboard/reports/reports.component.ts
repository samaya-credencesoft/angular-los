import { Component, OnInit } from '@angular/core';
import { Logger } from './../../common/logger.service';
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
  import {API_URL} from '../../app.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  statusList = [
    {value: 'Approved', viewValue: 'Approved'},
    {value: 'Rejection', viewValue: 'Rejection'},
    {value: 'Yes To Sanction', viewValue: 'Yes To Sanction'},
    {value: 'All', viewValue: 'All'}
  ];
  constructor(private logger:Logger,
    private http:Http) { }

    public LOGIN_APPLICATION_API = API_URL+ '/dashboardReportDetails';

  ngOnInit() {
  }
  onReportSelect(reportDetails){
    console.log(reportDetails);
    return this.http.post(this.LOGIN_APPLICATION_API, reportDetails).subscribe
    ( 
      data => {
          this.logger.log(data.json)
      alert("Report details are here !");
    });

  }

}
