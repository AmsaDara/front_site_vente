import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fullusername: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    phone: null,
    city: null
  });

  constructor(
    private fb: FormBuilder,
    private userService:UserService, 
    private snackBar:MatSnackBar,
    private router:Router,
    private route$:ActivatedRoute) {}

  onSubmit(): void {
    this.userService.registerUser(this.registerForm.value).subscribe({
      next:(res)=>{
        if(res.status === "success"){
          this.snackBar.open(res.message,"close");
          this.route$.url.subscribe( Value =>
          this.router.navigate(['signin']) )
        } else if (res.status === "fuil"){
          this.snackBar.open(res.message,"close")
        }
      },
      error:(error)=>{
        this.snackBar.open(error.message,"close")
      },
      complete:()=>{}
    })
  }
}
