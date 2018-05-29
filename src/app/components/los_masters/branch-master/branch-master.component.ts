import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/common_services/auth.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { BranchMaster } from './BranchMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';
  
@Component({
  selector: 'app-branch-master',
  templateUrl: './branch-master.component.html',
  styleUrls: ['./branch-master.component.css']
})
export class BranchMasterComponent implements OnInit {
  model: BranchMaster;
  messages: Message[] = [];

 
  constructor(private authService: AuthService) { 
    this.model = new BranchMaster();
  }

  ngOnInit() {
  }

  branchMasterDetails(details){
    console.log(this.model);
    this.authService
          .branchMasterDetails(this.model)
          .subscribe(isBranchMasterDetails => {
              if (isBranchMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }
  

}
