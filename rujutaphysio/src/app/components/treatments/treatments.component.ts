import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  name: string;
  image: string;
  imageRef:string;
  price1: string;
  price2: string;
  price3: string;
  time1:string;
  time2:string;
  time3:string;
  info: string;
  id:number;
}

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  constructor(public router: Router) { }
  
  ngOnInit(): void {
        console.log("Events Tile: ",this.eventsTile);
        this.eventsTile[0] = {id:1, color: 'none', cols: 1, rows: 1, name:"Indian Head Massage",image:"/assets/images/Indian Head Massage.jpg",
                             imageRef:"Image by cookie_studio on Freepik", price1:"25£", price2: "35£", price3:"45£",time1:"30 min", 
                             time2:"45 min", time3:"60 min",info:"Indian head massage originate from ayurvedic medicine and is used in India for more than 2000 years. Our Indian head massage focuses upon massaging the acupuncture points of head, neck and shoulders. It promotes relaxation and increases oxygen to the hair follicles. It promotes hair growth, scalp nourishment, improves sleep related problems such as insomnia, relieves tension headaches, migraine and sinusitis."
                             }
        
        this.eventsTile[1] = {id:2, color: 'none', cols: 1, rows: 1, name:"Deep Tissue Massage",image:"/assets/images/Deep Tissue Massage.jpg",
                             imageRef:"Photo by Toa Heftiba on Unsplash", price1:"25£", price2: "35£", price3:"45£",time1:"30 min", 
                             time2:"45 min", time3:"60 min",info:"It uses sustained deep pressures to target inner layers of muscles and connective tissues. These are generally delivered as full body massages that promote faster healing by increasing the blood flow to the target tissues. Typically it is used as a treatment programme in treating various musculoskeletal problems, chronic pain, muscle spasms, muscle knots and tight muscles. It may involve vigorous massage techniques including the knuckles and elbows to sustain deeper pressures on targeted tissues."
                             }
                             
        this.eventsTile[2] = {id:3, color: 'none', cols: 1, rows: 1, name:"Aromatherapy",image:"/assets/images/Aromatherapy.jpg",
                             imageRef:"Photo by Mariana Rascão on Unsplash", price1:"25£", price2: "35£", price3:"45£",time1:"30 min", 
                             time2:"45 min", time3:"60 min",info:"Our aromatherapy treatments basically focus upon complete relaxation of the entire body and mind. It uses essential oils from various plant extracts for therapeutic healing. It especially impacts the amygdala, the emotional center of the brain and elevates the mood. Unlike the deep tissue techniques aromatherapy is a much lighter treatment approach with gentle strokes to optimise physical, mental and emotional relaxation."
                             }

        this.eventsTile[3] = {id:4, color: 'none', cols: 1, rows: 1, name:"Sports Massage",image:"/assets/images/Sports Therapy.jpg",
                             imageRef:"Photo by Toralf Thomassen on Unsplash", price1:"25£", price2: "35£", price3:"45£",time1:"30 min", 
                             time2:"45 min", time3:"60 min",info:"Similar to deep tissue massages but target the specific areas of body which require healing. Typically these are given as treatment programmes for sports related injuries and for injury prevention. Addittionally Sports massage is used to improve performance and reduce recovery time. Therapy sessions will include initial assessment about the pain levels, mechanism of injury and range of movement, followed by the treatment sessions. Conditions such as tennis elbow, golfers elbow, ligament sprains can be treated with this treatment approach. "
                             }
         this.eventsTile[4] = {id:5, color: 'none', cols: 1, rows: 1, name:"Physiotherapy",image:"/assets/images/Physiotherapy.jpg",
                             imageRef:"Photo by Sincerely Media on Unsplash", price1:"25£", price2: "35£", price3:"45£",time1:"30 min", 
                             time2:"45 min", time3:"60 min",info:"It is a treatment approach to overcome functional disabilities and abnormal movement patters resulting from acute pain, chronic pain, and various musculoskeletal injuries. Initial musculoskeletal examination is carried out before treatments. The treatment sessions will aim to improve the movement patterns, range of movement, strength, flexibility, agility and posture as required depending upon the type of injury. Online consultations at 10 £. "
                             }                     
        console.log(this.eventsTile);
        
      

    

  }
   
  eventsTile: Tile[] = [];

  calcGridColumns(){
    return 4;
  }
  
  getTicket(a: any){
    console.log(a);
    this.router.navigate(['eventDetails']);
    
  }


}
