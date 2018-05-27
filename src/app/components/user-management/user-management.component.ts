import { AuthService } from './../../services/common_services/auth.service';

import { Component, OnInit,AfterViewInit,Renderer, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import {Router} from '@angular/router'
import {User} from '../authentication_components/signup/user';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  designations = [
    {value: 'Team Lead', viewValue: 'Team Lead'},
    {value: 'Floor Manger', viewValue: 'Floor Manger'},
    {value: 'Project Manager', viewValue: 'Project Manger'}
  ];
  model: User;
  static users: any = [];
  public classReference = UserManagementComponent;

  constructor(private renderer: Renderer, private service: AuthService, private router: Router) { }
  options = ['ACTIVE', 'DEACTIVE'];

  ngOnInit() {
    this.model = new User();
    this.plot_userTable();
    this.dtTrigger.next();

  }

  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute("user_id")) {
        var data_list = UserManagementComponent.users;
        var obj = data_list[event.target.getAttribute("user_id")]
     
        this.model = new User();
        this.model.id = obj.id;
        this.model.email = obj.email;this.model.firstname = obj.firstname;
        this.model.lastname = obj.lastname;this.model.mobileNumber = obj.mobileNumber;
        this.model.companyName = obj.companyName;this.model.status = obj.status;
        
        // Open the edit form .
        $("#userModal").modal('show');
      }
    });
    this.dtTrigger.next();
  }


  plot_userTable(){
    console.log("sdasdadasda")
    var temp:any = []

    this.dtOptions = {
    "ajax":{"url":"http://localhost:8080/api/users","dataSrc": function ( json ) {
      temp = json;
      console.log(json);
      UserManagementComponent.users = temp;
      return json
    },
    } ,
    "columns":[
      {title: 'Id',data: 'id'},
      {title: 'First Name',data: 'firstname'},
      {title: 'Last Name',data: 'lastname'},
      {title: 'Email',data: 'email'},
      {title: 'MobileNumber',data: 'mobileNumber'},
      {title: 'CompanyName',data: 'companyName'},
      {title: 'Status',data: 'status'},
      {
        title: 'Action',
        render: function (data: any, type: any, full: any,meta:any) {
          return "<button type='button' user_id="+meta.row+" class='btn btn-xs btn-warning edit' title='edit User'>Edit</button>";
        }
      }
    ],
    columnDefs: [
      { width: '2%', targets: 7, orderable: false},
    ],
    dom: 'Bfrtip',
    buttons: [
      'colvis',
      'csv',
    ]
    }
  }


  onEditUser(details)
  {
    this.service.updateUser(this.model).subscribe
    ( 
        data => {
        $('#userModal').modal('toggle');
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }
    );
  }
}
