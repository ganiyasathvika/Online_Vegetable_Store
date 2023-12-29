import { Component } from '@angular/core';
import { VeggiesHub } from '../../common/veggies-hub';
import { VeggiesHubService } from '../../services/veggies-hub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veggie-list',
  templateUrl: './veggie-list.component.html',
  styleUrl: './veggie-list.component.css'
})
export class VeggieListComponent {
  veggies : VeggiesHub[];

  constructor(private service :VeggiesHubService, private router: Router){}

  showEdit(id: number){
    this.router.navigate(['vegetable-edit', id]);
  }

  getVeggies() {
    this.service.getVeggies().subscribe((data) => {
      this.veggies = data;
    });
  }

  ngOnInit(){
    this.getVeggies();
  }
  
  deleteVeggie(id:number){
     if(confirm("Are you sure to delete this vegetable?")){
       this.service.deleteVeggie(id).subscribe((data) =>{
        this.getVeggies();
       });
     }
   
   }
}
