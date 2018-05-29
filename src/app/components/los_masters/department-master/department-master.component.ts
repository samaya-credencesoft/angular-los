import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/common_services/auth.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { DepartmentMaster } from './DepartmentMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';
  

@Component({
  selector: 'app-department-master',
  templateUrl: './department-master.component.html',
  styleUrls: ['./department-master.component.css']
})
export class DepartmentMasterComponent implements OnInit {
  model: DepartmentMaster;
  messages: Message[] = [];

  
  constructor(private authService: AuthService) { 
    this.model = new DepartmentMaster();
  }

  ngOnInit() {
  }

  departmentMasterDetails(details){
    console.log(this.model);
    this.authService
          .departmentMasterDetails(this.model)
          .subscribe(isDepartmentMasterDetails => {
              if (isDepartmentMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
