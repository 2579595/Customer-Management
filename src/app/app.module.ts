import { Component, NgModule, isStandalone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ROUTES, Route, RouterModule, Routes, provideRouter } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient} from '@angular/common/http';
import { CustomerComponent } from './pages/customer/customer.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AboutComponent } from './pages/about/about.component';



const appRoutes : Routes=[
  {path: 'login' , component: LoginComponent },
  {path: 'register' , component:RegisterComponent},
  {path: 'home', component:HomeComponent},
  {path: 'customer',component:CustomerComponent},
  {path: 'orders',component:OrdersComponent},
  {path: 'about',component:AboutComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    OrdersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FormsModule
   
  ],
  providers: [provideHttpClient() ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
