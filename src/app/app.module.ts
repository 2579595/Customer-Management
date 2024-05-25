import { Component, NgModule, isStandalone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetComponent } from './pages/reset/reset.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ROUTES, Route, RouterModule, Routes, provideRouter } from '@angular/router';
import { Path } from 'mongoose';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient} from '@angular/common/http';



const appRoutes : Routes=[
  {path: 'login' , component: LoginComponent },
  {path: 'register' , component:RegisterComponent},
  {path: 'forget-password', component:ForgetPasswordComponent},
  {path: 'home', component:HomeComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    ForgetPasswordComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    CommonModule,
    RouterModule
   
  ],
  providers: [provideHttpClient() ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
