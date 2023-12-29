import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';


function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const newPassword = control.get('customerNewPassword')?.value;
  const confirmPassword = control.get('customerConfirmPassword')?.value;

  return newPassword === confirmPassword ? null : { 'passwordMismatch': true };
}

@Component({
  selector: 'app-vegetable-sign-up',
  templateUrl: './vegetable-sign-up.component.html',
  styleUrl: './vegetable-sign-up.component.css'
})
export class VegetableSignUpComponent {
  signUpForm:FormGroup;

  constructor(private builder:FormBuilder, 
    private customerService:CustomerService, 
    private router: Router){}

  ngOnInit(){
    this.signUpForm = this.builder.group({
      customerName: ['',[ Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
      customerEmail: ['', [Validators.required,Validators.email]],
      customerMobile: ['', [Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      customerNewPassword: ['', Validators.required],
      customerConfirmPassword: ['', Validators.required],
    },{ validators: passwordMatchValidator});
  }

  signUp(){
    if(this.signUpForm.valid){
      this.customerService.signUp(this.signUpForm.value).subscribe((data)=>{
        this.router.navigateByUrl('/hamburger-menu');
        alert("Successfully Registered")
        console.log(data)
      })
      
    }else{
      if (this.signUpForm.hasError('passwordMismatch')) {
        alert('Password and Confirm Password do not match');
      } else {
        console.log(this.signUpForm.value);
      }
    }
  }
}
