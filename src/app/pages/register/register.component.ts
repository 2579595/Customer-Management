import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fb=inject( FormBuilder);
  authService = inject(AuthService)
   // router = inject(Router)
 

    registerForm ! : FormGroup;

   

    ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.compose([Validators.required, Validators.email])],
      userName : ['', Validators.required],
      password : ['', Validators.required],
      confirmPassword : ['', Validators.required],
     },
     )
    }
 
  
     
    register(){
     this.authService.registerService(this.registerForm.value)
      .subscribe({
        next: (res)=>{
          alert("User Created!");
          this.registerForm.reset();
         // this.router.navigate(['/login'])

        },
        error:(err)=>{
          console.log(err);
        }
      })
     
    }
}
