import { Component } from '@angular/core';
import { VeggiesHub } from '../../common/veggies-hub';
import { VeggiesHubService } from '../../services/veggies-hub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetable-home',
  templateUrl: './vegetable-home.component.html',
  styleUrl: './vegetable-home.component.css'
})

export class VegetableHomeComponent {

  veggies:VeggiesHub[];
  veggiesImages:string[]=[];

  constructor(private service :VeggiesHubService,private router:Router){ }

  ngOnInit() {
    this.service.getVeggies().subscribe((data) => {
      this.veggies = data;
    });
  }

  
  
  //window.location.href='/';
  

  
  

}
