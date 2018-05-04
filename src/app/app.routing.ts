import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './common/auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoanApplicationNew} from './application/newloanapplication.component'
import {SignupComponent} from './signup/signup.component'
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import { DataComponent } from './dashboard/data/data.component';
import { DownloadsComponent } from './dashboard/downloads/downloads.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { LogoutComponent } from './dashboard/logout/logout.component'


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'application',
        component: LoanApplicationNew
       
    },
    {
        path: 'signin',
        component: LoginComponent
       
    },
    {
        path: 'signup',
        component: SignupComponent
       
    },
    {
        path: 'resetPassword',
        component: ResetPasswordComponent
       
    },
    {
        path: 'forgotPassword',
        component: ForgotPasswordComponent
       
    },
    {
        path: 'dashboard',
        component: DashboardComponent
       
    },
    {
        path: 'data',
        component: DataComponent
       
    },
    {
        path: 'downloads',
        component: DownloadsComponent
       
    },
    {
        path: 'reports',
        component: ReportsComponent
       
    },
    {
        path: 'logout',
        component: LogoutComponent
       
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);