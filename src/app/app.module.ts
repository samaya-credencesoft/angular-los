import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMaterialModules } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { LoanApplicationNew } from './application/newloanapplication.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import {Http,Response,RequestOptions,Headers,HttpModule} from '@angular/http';
import { Logger } from './common/logger.service';
import { AddressService } from './common/address.service';
import { CustomerOnboardingService } from './los/los.loanapplication.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthService} from './common/auth.service';
import {AuthGuard} from './common/auth-guard.service';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DataComponent } from './dashboard/data/data.component';
import { DownloadsComponent } from './dashboard/downloads/downloads.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { LogoutComponent } from './dashboard/logout/logout.component'
import {confirmEqualPasswordValidator } from './common/confirm-equal-passwords-validator.directive';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatButtonModule,
    HttpModule,  
    AppMaterialModules,
    routing
   
    ],
  declarations: [
     LoanApplicationNew,
     LoginComponent, 
     SignupComponent, 
     HomeComponent, 
     DashboardComponent,
     AppComponent,
     ResetPasswordComponent,
     ForgotPasswordComponent,
     DataComponent,
     DownloadsComponent,
     ReportsComponent,
     LogoutComponent,
     confirmEqualPasswordValidator
    ],
  bootstrap: [AppComponent],
  providers:[
    Logger,
    AddressService,
    CustomerOnboardingService,
    AuthService,
    AuthGuard
  ]

})
export class AppModule { }