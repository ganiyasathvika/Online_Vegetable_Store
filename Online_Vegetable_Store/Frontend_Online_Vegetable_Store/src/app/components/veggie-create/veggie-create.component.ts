import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeggiesHubService } from '../../services/veggies-hub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veggie-create',
  templateUrl: './veggie-create.component.html',
  styleUrl: './veggie-create.component.css'
})
export class VeggieCreateComponent {
  vegetableForm:FormGroup;
  constructor(private builder:FormBuilder, 
    private service:VeggiesHubService, 
    private router: Router){}

  ngOnInit(){
    this.vegetableForm = this.builder.group({
      vegetableName: ['',[ Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      vegetablePrice: ['', Validators.required],
      vegetableWeight: ['', Validators.required],
      vegetableBenefits: ['', Validators.required],
      vegetableImageUrl:['', Validators.required],
    });
  }

  createVegetable(){
    if(this.vegetableForm.valid){
      this.service.createVegetable(this.vegetableForm.value).subscribe((data)=>{
        this.router.navigateByUrl('/veggie-list');
        console.log(data)
      })
      
    }else{
      console.log(this.vegetableForm.value)
    }
  }
}
