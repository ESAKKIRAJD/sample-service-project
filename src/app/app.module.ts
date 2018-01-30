import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

//service

import {DataServiceService}from'./data-service.service';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', pathMatch:'full', redirectTo:'login'},
      { path:'login',component:LoginComponent },
      { path:'forgotpassword',component:ForgotPasswordComponent},
      { path:'dashboard',component:DashboardComponent },
      { path:'profile',component:ProfileComponent },
      { path:'register',component:RegisterComponent },
      { path:'terms',component:TermsComponent },

    ])
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
