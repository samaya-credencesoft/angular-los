import { DashboardService } from './../../services/dashboard_services/dashboard.service';
import { Component, OnInit,AfterViewInit,Renderer, ViewChild } from '@angular/core';

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

export class DashboardComponent implements OnInit,AfterViewInit {


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


  constructor(private renderer: Renderer,private service: DashboardService, private router: Router) { }

  
  ngOnInit(){
    this.plot_dataTable();
  }

  // Show all loan applicants details . 
  plot_dataTable(){

    this.dtOptions = {
    "ajax":{"url":"http://localhost:8080/api/loanApplicants","dataSrc":""} ,
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
        render: function (data: any, type: any, full: any) {
          console.log(data,full,type);
          return "<button type='button' view-person-id="+full.id+" class='btn btn-xs btn-primary edit' title='edit User'>Edit</button>";
        }
      }
      
    ],
    columnDefs: [
      { width: '2%', targets: 3, orderable: false}
    ],
    // Declare the use of the extension in the dom parameter
    dom: 'Bfrtip',
    // Configure the buttons
    buttons: [

      'colvis',
      'csv'
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

  
  editFunction(s){
    console.log(s);
    $("#loan_applicant_modal").modal('show');
  }

  logout(e:Event)
  {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', "false");
    this.router.navigate(['signin']);
  }

  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      console.log(event );
      console.log(event.target.hasAttribute("view-person-id"));
      
      if (event.target.hasAttribute("view-person-id")) {
       console.log(event.target.getAttribute("view-person-id"));
      //  this.myModal.nativeElement.className = 'modal fade show';
      }
    });
  }

}
