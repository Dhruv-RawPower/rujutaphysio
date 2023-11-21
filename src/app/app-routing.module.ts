import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './components/booking/booking.component';

const routes : Routes =[
  {
    path:"/",
    component:AboutUsComponent,
    pathMatch:"full"
  },
  {
    path:"",
    component:AboutUsComponent,
    pathMatch:"full"
  },
  {
    path:"home",
    component:AboutUsComponent,
    pathMatch:"full"
  },
  {
    path:"treatments",
    component:TreatmentsComponent,
    pathMatch:"full"
  },
  {
    path:"booking",
    component:BookingComponent,
    pathMatch:"full"
  }
]


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {


 }
