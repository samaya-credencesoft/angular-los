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
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
@Injectable()

export class DataComponent implements OnInit {
  datas = [
    {value: 'Approved', viewValue: 'Approved'},
    {value: 'Rejection', viewValue: 'Rejection'},
    {value: 'Yes To Sanction', viewValue: 'Yes To Sanction'},
    {value: 'All', viewValue: 'All'}
  ];
  constructor(private logger:Logger,
    private http:Http) { }
    public LOGIN_APPLICATION_API = API_URL+ '/dashboardDataDetails';

  ngOnInit() {
  }


  onDataSelect(dataDetails){
    
    console.log(dataDetails);
    return this.http.post(this.LOGIN_APPLICATION_API, dataDetails).subscribe
    ( 
      data => {
          this.logger.log(data.json)
      alert("Data Details are here");
    });
    
  }


}
