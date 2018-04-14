import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './common/auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoanApplicationNew} from './application/newloanapplication.component'
import {SignupComponent} from './signup/signup.component'

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
       
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);