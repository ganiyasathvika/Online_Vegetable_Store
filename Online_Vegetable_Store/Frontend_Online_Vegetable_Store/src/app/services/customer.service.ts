import { Injectable } from '@angular/core';
import { Customer } from '../common/customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  basePath:string="http://localhost:8181/myapp/api/customer"
  

  constructor(private http:HttpClient) { }

  signUp(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.basePath, customer);
  }


  // registerUser(registerData){
  //   return this.http.post(this.basePath);
  // }
}
