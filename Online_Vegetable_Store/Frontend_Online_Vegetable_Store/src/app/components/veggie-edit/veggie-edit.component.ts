import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeggiesHub } from '../../common/veggies-hub';
import { VeggiesHubService } from '../../services/veggies-hub.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veggie-edit',
  templateUrl: './veggie-edit.component.html',
  styleUrl: './veggie-edit.component.css'
})
export class VeggieEditComponent {
  vegetableForm: FormGroup;
  vegetable:VeggiesHub = new VeggiesHub();
  id: number;

  constructor(
    private builder: FormBuilder,
    private service: VeggiesHubService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    this.vegetableForm = this.builder.group({
      vegetableName: ["",[ Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      vegetablePrice: ['', Validators.required],
      vegetableWeight: ['', Validators.required],
      vegetableBenefits: ['', Validators.required],
      vegetableImageUrl:['', Validators.required]
    });

    //reading id given in the list component onclick of EDIT Button
    this.id = this.activateRoute.snapshot.params['id'];

    this.service.getVeggie(this.id).subscribe((data) =>{
      this.vegetable = data;
      console.log(data);
    });

    
    }
    updateVeggie(){
      if(confirm("Are you sure to update?")){
        this.service.updateVeggie(this.vegetable).subscribe((data) => {
          alert("Vegetable is Updated");
              this.router.navigateByUrl('veggie-list');
            });
      }
      
  }
}
