import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/authentication_components/login/login.component';
// import {HomeComponent} from './home/home.component';
import {AuthGuard} from './services/common_services/auth-guard.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoanApplicationNew} from './components/los_application/newloanapplication.component';
import {SignupComponent} from './components/authentication_components/signup/signup.component';
import {ResetPasswordComponent} from './components/authentication_components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './components/authentication_components/forgot-password/forgot-password.component';
import { LogoutComponent } from './components/authentication_components/logout/logout.component';
import { BaseComponent } from './components/base_component/base.component';
import { StateMasterComponent } from './components/los_masters/state-master/state-master.component';

const appRoutes: Routes = [
    // {
    //     path: 'home',
    //     component: HomeComponent,
    //     canActivate: [AuthGuard]
    // },
    {
        path: '',
        component: LoanApplicationNew
    },
    {
        path: 'signin',
        component: LoginComponent
    },
    {
        path: 'baseComponent',
        component: BaseComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path:  'resetPassword/:*',
        component: ResetPasswordComponent
    },
    {
        path: 'forgotPassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'stateMaster',
        component: StateMasterComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);