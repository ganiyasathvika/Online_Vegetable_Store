import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VegetableLoginComponent } from './components/vegetable-login/vegetable-login.component';
import { VegetableSignUpComponent } from './components/vegetable-sign-up/vegetable-sign-up.component';
import { VegetableHomeComponent } from './components/vegetable-home/vegetable-home.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { VeggieListComponent } from './components/veggie-list/veggie-list.component';
import { VeggieCreateComponent } from './components/veggie-create/veggie-create.component';
import { VeggieEditComponent } from './components/veggie-edit/veggie-edit.component';

const routes: Routes = [
  {path:'vegetable-login',component:VegetableLoginComponent},
  {path:'vegetable-signUp',component:VegetableSignUpComponent},
  {path:'',component:VegetableHomeComponent,pathMatch:'full'},
  {path:'hamburger-menu',component:HamburgerMenuComponent},
  {path:'veggie-list',component:VeggieListComponent},
  {path:'veggie-create',component:VeggieCreateComponent},
  {path:'vegetable-edit/:id',component:VeggieEditComponent},
  {path:'admin',component:AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
