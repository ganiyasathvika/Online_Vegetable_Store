import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../common/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vegetable-login',
  templateUrl: './vegetable-login.component.html',
  styleUrl: './vegetable-login.component.css'
})
export class VegetableLoginComponent {
  loginForm:FormGroup;
  customer: { customerEmail: string, customerPassword: string } = { customerEmail: '', customerPassword: '' };
  
  constructor(private builder:FormBuilder,private router: Router) { }

  ngOnInit(){
    this.loginForm = this.builder.group({
      customerEmail: ['', [Validators.required,Validators.email]],
      customerPassword:['', Validators.required]
    });
  }

  login(){

    if (this.loginForm.valid) {
      this.customer.customerEmail = this.loginForm.get('customerEmail')?.value;
      this.customer.customerPassword = this.loginForm.get('customerPassword')?.value;

      // Your login logic here

      if (this.customer.customerEmail === "admin@gmail.com" && this.customer.customerPassword === "admin@123") {
        alert("Login Success");
        this.router.navigateByUrl('admin');
      } else {
        alert("Invalid Email or Password");
      }

      console.log(this.customer.customerEmail);
      console.log(this.customer.customerPassword);
    }
  }

}
