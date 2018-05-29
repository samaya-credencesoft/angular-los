import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  public show:boolean = true;
  public buttonName:any = 'Show';

  sidenav = true;
  content_box = true;
  isClassVisible = false;
  isClassVisibleContainer = "false";
  logo = "Loan Originating System"	;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(e:Event)
  {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', "false");
    console.log(localStorage.getItem('isLoggedIn'))
    this.router.navigate(['signin']);
  }

  // Code to toggle the sidebar .
   changeShowStatus(){
    this.sidenav = !this.sidenav;
    this.content_box = !this.content_box;
    this.isClassVisible = !this.isClassVisible;
    
    this.logo = this.isClassVisible?"LOS":"Loan Originating System";

     this.show = !this.show;
  }
  
}
