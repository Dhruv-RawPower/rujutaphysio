import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  constructor(public router: Router,private http: HttpClient,private domSanitizer: DomSanitizer) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  name!: string;
  email!: string;
  message!: string;
  access_key!:string;

  rawHtmlResponse!: string; // This will hold the raw HTML response
  sanitizedHtmlResponse!: SafeHtml; // This will hold the sanitized HTML content
  
  sanitizeHtmlResponse() {
    this.sanitizedHtmlResponse = this.domSanitizer.bypassSecurityTrustHtml(this.rawHtmlResponse);
  }

  onSubmit() {
    // Client-side validation
    if (!this.name || !this.email || !this.message) {
      // Display an error message or prevent submission
      return;
    }
  
    // Prepare the data to send to the server
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message,
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
    this.sanitizeHtmlResponse();
    },
    (error) => {
      console.error('Error submitting form:', error);
    }
  );
  }
   
  


}
