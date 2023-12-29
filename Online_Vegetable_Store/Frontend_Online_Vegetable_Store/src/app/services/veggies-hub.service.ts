import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VeggiesHub } from '../common/veggies-hub';

@Injectable({
  providedIn: 'root'
})
export class VeggiesHubService {

  basePath:string="http://localhost:8181/myapp/api/veggieshub"
  
  constructor(private http:HttpClient) { }

  getVeggies():Observable<VeggiesHub[]>{
   return this.http.get<VeggiesHub[]>(this.basePath);
  }
  
  createVegetable(vegetable: VeggiesHub): Observable<VeggiesHub> {
     return this.http.post<VeggiesHub>(this.basePath, vegetable);
 }
 getVeggie(id: number):Observable<VeggiesHub>{
  return this.http.get<VeggiesHub>(`${this.basePath}/${id}`);
  }

  deleteVeggie(id: number):Observable<any>{
     return this.http.delete(`${this.basePath}/${id}`);//this.basepath + id
   }

  

   updateVeggie(vegetable: VeggiesHub): Observable<any> {
     return this.http.put(this.basePath, vegetable);
   }
  
}
