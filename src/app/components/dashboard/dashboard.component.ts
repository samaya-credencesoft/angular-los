import { LoanApplication } from './../los_application/loanApplication';
import { DashboardService } from './../../services/dashboard_services/dashboard.service';
import { Component, OnInit,AfterViewInit,Renderer, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
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

  base = "http://localhost:8080/api/";
  get_applicants_url = this.base+"loanApplicants";

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  flag = false;

  static applicants: any = [];
  static total_applicants = 0;
  static new_applicants = 0;
  static pending_applicants = 0;
  static approved_applicants = 0;

  public classReference = DashboardComponent;

  isClassVisible = false;
  model = new LoanApplication('','','','','','','','','','','','','','','','','','','','','');

  ltypes = [
    {value: 'student loan-0', viewValue: 'Student loan'},
    {value: 'personal loan-1', viewValue: 'Personal loan'},
    {value: 'home loan-2', viewValue: 'Home loan'},
    {value: 'business loan-3', viewValue: 'Business loan'},
    {value: 'loan against property-4', viewValue: 'Loan against property'},
    {value: 'loan for educational institutes-5', viewValue: 'Loan for educational institutes'},
    {value: 'new car loan-6', viewValue: 'New car loan'},
    {value: 'used car loan-7', viewValue: 'Used car loan'},
    {value: 'two wheeler loan-8', viewValue: 'Two wheeler loan'}
  ];

  customers = [
    {value: 'individual-0', viewValue: 'Individual'},
    {value: 'public ltd-1', viewValue: 'Public Ltd'},
    {value: 'private ltd-2', viewValue: 'Private Ltd'},
    {value: 'llp-3', viewValue: 'LLP'},
    {value: 'partnership-4', viewValue: 'Partnership'},
    {value: 'proprietorship-5', viewValue: 'Proprietorship'},
    {value: 'society-6', viewValue: 'Society'},
    {value: 'trust-7', viewValue: 'Trust'},
    {value: 'school-8', viewValue: 'School'}
  ];

  genders = [
    {value: 'male-0', viewValue: 'Male'},
    {value: 'female-1', viewValue: 'Female'}
  ];

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
      DashboardComponent.applicants = temp;
      DashboardComponent.total_applicants = temp.length;
      DashboardComponent.new_applicants = 0;
      DashboardComponent.approved_applicants = 0;
      DashboardComponent.pending_applicants = 0;
      for (let entry of temp) {
        if(entry.loanStatus == "NEW"){
          DashboardComponent.new_applicants+=1;
        }else if(entry.loanStatus == "APPROVED"){
          DashboardComponent.approved_applicants+=1;
        }else if(entry.loanStatus == "PENDING"){
          DashboardComponent.pending_applicants+=1;
        }
      }
      return json
  },
      } ,
    "columns":[
      {title: 'Id',data: 'id'},
      {title: 'Name',data: 'name'},
      {title: 'Email',data: 'email'},
      {title: 'LoanAmount',data: 'loanAmount'},
      {title: 'LoanTenure',data: 'loanTenure'},
      {title: 'Aadhar',data: 'aadharNumber'},
      {title: 'Pan',data: 'pan'},
      {title: 'PhNo',data: 'mobileNumber'},
      {title: 'Address',data: 'address'},
      {title: 'City',data: 'addressCity'},
      {title: 'State',data: 'addressState'},
      {title: 'Status',data: 'loanStatus'},
      {
        title: 'Action',
        render: function (data: any, type: any, full: any,meta:any) {
          return "<button type='button' id="+meta.row+" class='btn btn-xs btn-warning edit' title='edit User'>Edit</button>";
        }
      }
    ],
    columnDefs: [
      { width: '2%', targets: 12, orderable: false},
    ],
    dom: 'Bfrtip',
    buttons: [
      'colvis',
      'csv',
    ]
  }
  
}

  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute("id")) {
        var data_list = DashboardComponent.applicants;
        var obj = data_list[event.target.getAttribute("id")]
        console.log(obj,"dasda")
        this.model = new LoanApplication(obj.loanAmount,obj.loanTenure,obj.aadharNumber,obj.mobileNumber,obj.annualIncome,obj.id,obj.name,obj.customerCategory,obj.pinCode,obj.addressCity,obj.addressState,obj.addressCountry,obj.gender,obj.dob,obj.address,obj.email,obj.profession,obj.loanType,obj.pan,obj.landmark,obj.loanStatus);
        // Open the edit form .
        $("#editApplicant").modal('show');
      }
    });
    this.dtTrigger.next();
  }

  onEdit(details)
  {
    this.service.updateLoanApplication(this.model).subscribe
    ( 
        data => {
        $('#editApplicant').modal('toggle');
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }
    );
  }
  
  options = ['NEW', 'APPROVED', 'PENDING'];
optionSelected: any;

onOptionSelected(event){
 console.log(event.target.selectedOptions[0].innerText); //option value will be sent as event
}
  



}
