import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators  } from '@angular/forms';

declare let paypal: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}
  showPaymentButtons: boolean = false;

  orderDetails: any;
  createOrder: any;
  bookingForm: FormGroup | any;
 
    

 
  ngOnInit() {
    this.bookingForm = this.formBuilder.group({
      duration: ['', Validators.required],
      date: [this.getCurrentDate(), Validators.required],
      total: [{ value: '', disabled: true }] // Add the total form control
    }); 
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  onFormSubmit() {
    // Handle the form submission
    if (this.bookingForm.valid) {
      console.log('Form submitted is valid:', this.bookingForm.value);
      this.showPaymentButtons = true;
    console.log('Form submitted is valid:',  this.showPaymentButtons);

    setTimeout(() => { 
    
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: 'GBP',
                value: this.bookingForm.value.duration
              }
            }
          ]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          // Logic to handle the successful payment
          console.log('Payment completed:', details);
          this.orderDetails = details;
        });
      },
      onError: (err: any) => {
        // Logic to handle errors during payment
        console.log('Payment error:', err);
      }
    }).render('#paypal-button-container');
  },0);

      // Perform further actions with the form data
    }
  }
  
}
