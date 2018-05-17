import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  user_data = [];
  constructor() { }
  
  ngOnInit(){
    this.user_data = [
      {
        "id": 860,
        "firstName": "Superman",
        "lastName": "Yoda"
        
    
      },
      {
        "id": 860,
        "firstName": "Superman",
        "lastName": "Yoda"
        
    
      },
      {
        "id": 860,
        "firstName": "Superman",
        "lastName": "Yoda"
        
    
      },
      {
        "id": 860,
        "firstName": "Superman",
        "lastName": "Yoda"
        
    
      }]
    this.plot_dataTable();
  }

  plot_dataTable(){
    this.dtOptions = {
    "scrollY":        "150px",
    "scrollCollapse": true,
    "paging":         false,
    "data": this.user_data,
    "columns":[
      {title: 'ID',data: 'id'},
      {title: 'firstName',data: 'firstName'},
      {title: 'lastName',data: 'lastName'},
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


}
