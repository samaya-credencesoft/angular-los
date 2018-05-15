import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMaterialModules } from './material.module';
import {BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { LoanApplicationNew } from './components/los_application/newloanapplication.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';
import { Logger } from './services/common_services/logger.service';
import { AddressService } from './services/common_services/address.service';
import { CustomerOnboardingService } from './services/los_application_services/los.loanapplication.service';
import { LoginComponent } from './components/authentication_components/login/login.component';
import { SignupComponent } from './components/authentication_components/signup/signup.component';
// import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthService} from './services/common_services/auth.service';
import {AuthGuard} from './services/common_services/auth-guard.service';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import { ResetPasswordComponent } from './components/authentication_components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/authentication_components/forgot-password/forgot-password.component';
import { LogoutComponent } from './components/authentication_components/logout/logout.component'
import {confirmEqualPasswordValidator } from './services/common_services/confirm-equal-passwords-validator.directive';
import {BaseComponent} from './components/base_component/base.component';
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
    routing
    ],
  declarations: [
     LoanApplicationNew,
     LoginComponent,
     SignupComponent,
     // HomeComponent,
     DashboardComponent,
     AppComponent,
     ResetPasswordComponent,
     ForgotPasswordComponent,
     LogoutComponent,
     confirmEqualPasswordValidator,
     BaseComponent
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