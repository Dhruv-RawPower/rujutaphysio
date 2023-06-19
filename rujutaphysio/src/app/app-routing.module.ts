import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CommonModule } from '@angular/common';

const routes : Routes =[
  {
    path:"home",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"about",
    component:AboutUsComponent,
    pathMatch:"full"
  },
  {
    path:"treatments",
    component:TreatmentsComponent,
    pathMatch:"full"
  },
]


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {


 }
