import { DashboardService } from './../../services/dashboard_services/dashboard.service';
import { Component, OnInit,AfterViewInit,Renderer, ViewChild } from '@angular/core';

import {Router} from '@angular/router'
import { Subject } from 'rxjs';
declare var jquery:any;
declare var $ :any;
export class User {
  constructor(public name: string) {
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {


  dtOptions: any = {};
  flag = false;
  dtTrigger: Subject<any> = new Subject();
  base = "http://localhost:8080/api/";
  get_applicants_url = this.base+"loanApplicants";
  static applicants: any = [];
 

  isClassVisible = false;




  constructor(private renderer: Renderer,private service: DashboardService, private router: Router) { 
    
  }
  
  ngOnInit(){
    this.plot_dataTable();
  }

  // Show all loan applicants Details . 
  plot_dataTable(){
    var temp:any = []

    this.dtOptions = {
    "ajax":{"url":"http://localhost:8080/api/loanApplicants","dataSrc": function ( json ) {
      temp = json;
      console.log(json);
      DashboardComponent.applicants = temp;
      return json
  },
      } ,
    "columns":[
      {title: 'id',data: 'id'},
      {title: 'name',data: 'name'},
      {title: 'email',data: 'email'},
      {title: 'loanAmount',data: 'loanAmount'},
      {title: 'aadharNumber',data: 'aadharNumber'},
      {title: 'addressCity',data: 'addressCity'},
      {title: 'addressState',data: 'addressState'},
      {
        title: 'Action',
        render: function (data: any, type: any, full: any,meta:any) {
          return "<button type='button' view-person-id="+meta.row+" class='btn btn-xs btn-primary edit' title='edit User'>Edit</button>";
        }
      }
    ],
    columnDefs: [
      { width: '2%', targets: 3, orderable: false}
    ],
    dom: 'Bfrtip',
    buttons: [
      'colvis',
      'csv'
    ]
  }
  
}

 


  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      console.log(event.target.hasAttribute("view-person-id"));
      if (event.target.hasAttribute("view-person-id")) {
        var obj = DashboardComponent.applicants;
        // Open the edit form .
        $("#editApplicant").modal('show');
      }
    });
  }

  
  



}
