import { Component } from '@angular/core';
import { faMapLocation,faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faMapLocation =faMapLocation;
  faEnvelope = faEnvelope;
  faPhone = faPhone;



}
