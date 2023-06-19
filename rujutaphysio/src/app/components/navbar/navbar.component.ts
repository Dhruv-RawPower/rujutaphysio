import { Component } from '@angular/core';
import { AfterViewInit,  ElementRef,  Inject, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



export interface MenuItem {
  label: string;
  icon: string;
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
  path: string;
  logged: boolean;
  function: string;
  id: string;
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})




export class NavbarComponent implements OnInit,AfterViewInit  {
  constructor(private breakpointObserver: BreakpointObserver) { }
  isTabletOrMobile: boolean = false;


  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Tablet, Breakpoints.Handset]).subscribe(result => {
      this.isTabletOrMobile = result.matches;
    });
    
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  menuItems: MenuItem[] = [
    /*{
      label: 'Sign Upasadasdasd',
      icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      path: "login",
      logged: true,
      function: '',
      id: "sign" 
    },*/
    {
      label: 'Home',
      icon: 'notes',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      path: "home",
      logged: true,
      function: '',
      id: "home" 
    },
    {
      label: 'About Us',
      icon: 'help',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      path:"about",
      logged: true,
      function: '',
      id: "about" 
    },
    {
      label: 'Treatments and Booking',
      icon: 'medication',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      path:"treatments",
      logged: true,
      function: '',
      id: "treatments" 
    }
    
    
  ];


}
