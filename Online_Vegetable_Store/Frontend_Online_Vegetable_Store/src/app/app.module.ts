import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VegetableLoginComponent } from './components/vegetable-login/vegetable-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VegetableSignUpComponent } from './components/vegetable-sign-up/vegetable-sign-up.component';
import { VegetableHomeComponent } from './components/vegetable-home/vegetable-home.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { VeggieListComponent } from './components/veggie-list/veggie-list.component';
import { VeggieCreateComponent } from './components/veggie-create/veggie-create.component';
import { VeggieEditComponent } from './components/veggie-edit/veggie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VegetableLoginComponent,
    VegetableSignUpComponent,
    VegetableHomeComponent,
    HamburgerMenuComponent,
    AdminComponent,
    VeggieListComponent,
    VeggieCreateComponent,
    VeggieEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
