import { DashboardService } from './../../services/dashboard_services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Subject } from 'rxjs';
declare var jquery:any;
declare var $ :any;

class Person {
  id: number;
  firstName: string;
  lastName: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dtOptions: any = {};
  public show:boolean = true;
  public buttonName:any = 'Show';
  flag = false;
  dtTrigger: Subject<any> = new Subject();
  base = "http://localhost:8080/api/";
  get_applicants_url = this.base+"loanApplicants";

  user_data = [];

  // [
  //   {
  //     "id": 860,
  //     "firstName": "Superman",
  //     "lastName": "Yoda"
  //   }]

  constructor(private service: DashboardService, private router: Router) { 
   
  }
  
  ngOnInit(){
    this.plot_dataTable();
  }

  // Show all loan applicants details . 
  plot_dataTable(){

    this.dtOptions = {
    "ajax":{"url":"http://localhost:8080/api/loanApplicants","dataSrc":""} ,
    "columns":[
      {title: 'id',data: 'id'},
      {title: 'loanAmount',data: 'loanAmount'},
      {title: 'aadharNumber',data: 'aadharNumber'},
      {
          "render": function(d, t, r){
              var edit_btn = "<button type='button' class='btn btn-xs btn-primary edit' onclick='editFunction()' title='edit User'><i class='fa fa-pencil'></i></button>"
              var $button = $(edit_btn, { });
              return $button.prop("outerHTML");
          }
      },
      {
        "render": function(d, t, r){
          var delete_btn ="<button type='button' class='btn btn-danger btn-xs delete' onclick='deleteFunction()' title='delete User'><i class='fa fa-times'></i></button>"
          var $button = $(delete_btn, { });
          return $button.prop("outerHTML");
      }
      }
    ],
    columnDefs: [
      { width: '2%', targets: 3, orderable: false},
      { width: '2%', targets: 4, orderable: false}
  ]
  }
}

  // Code to toggle the sidebar .
  toggle() {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  
  editFunction(){
    $("#loan_applicant_modal").modal('show');
  }
}
