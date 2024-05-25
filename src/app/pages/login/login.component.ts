import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export  class LoginComponent {
   



  fb=inject( FormBuilder);
  authService = inject(AuthService)
    router = inject(Router)






  loginForm ! : FormGroup;

   

  ngOnInit(): void {
  this.loginForm =this.fb.group({
  
    email : ['', Validators.compose([Validators.required, Validators.email])],
   
    password : ['', Validators.required],
    
   })
  }
  login(){
   this.authService.loginService(this.loginForm.value)
   .subscribe({
    next:(res)=>{
      alert("Login in Success!");
      this.router.navigate(['home'])
     this.loginForm.reset()
    },
    error:(err)=>{
      console.log(err);
    }
   })
  }
}
