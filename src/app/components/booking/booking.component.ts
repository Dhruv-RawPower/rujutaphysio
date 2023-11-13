import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators  } from '@angular/forms';
import { Router } from '@angular/router';

declare let paypal: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private http: HttpClient,public router: Router) {}
//  showPaymentButtons: boolean = false; //Payment Gateway

  orderDetails: any;
  createOrder: any;
  bookingForm: FormGroup | any;
  name!: string;
  email!: string;
  message!: string;
  access_key!:string;
  total!:string;
  date!:string;    
  duration!:string;
 
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
  onClickOkButton(){
    document.location.href = 'https://www.jwpodiatry.co.uk/book-online-1';
  }

  onClickCancelButton(){
    this.router.navigate(['treatments']);;
  }

  onFormSubmit() {
    // Handle the form submission
    if (this.bookingForm.valid) {
      console.log('Form submitted is valid:', this.bookingForm.value);
      if (!this.name || !this.email || !this.message) {
        // Display an error message or prevent submission
        console.log('Arrey eh ka hai');
        return;
      }
      // Prepare the data to send to the server
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message + this.duration + this.date + this.total ,
      access_key:"cecae326-e249-46c5-8f70-d161c230ee33"
    };
    // Define the URL of the API
    const apiUrl = 'https://api.web3forms.com/submit';

    // Define the request headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set the Content-Type header to JSON
    });
  
    // Send a POST request to the server
    this.http.post(apiUrl, formData, { headers })
  .subscribe(
    (response) => {
      console.log('Request successful:', response);

    // Assuming you have received the HTML response in your HTTP response handling code
    //this.rawHtmlResponse = response;
    // Now, sanitize and set it for rendering
    },
    (error) => {
      console.error('Error submitting form:', error);
    }
  );

     // this.showPaymentButtons = true; //Payment Gateway
    //console.log('Form submitted is valid:',  this.showPaymentButtons);
    /*  
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

     */ // Perform further actions with the form data
    }
  }
  
}
