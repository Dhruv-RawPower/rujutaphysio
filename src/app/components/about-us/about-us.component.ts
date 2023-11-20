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
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent  implements OnInit {

  constructor(public router: Router) { }
  
  ngOnInit(): void {
        console.log("Events Tile: ",this.eventsTile);
        this.eventsTile[0] = {id:1, color: 'none', cols: 1, rows: 1, name:"Courage",image:"/rujutaProduction/assets/images/Courage.png",
                             imageRef:"Image by cookie_studio on Freepik", price1:"25£", price2: "35£", price3:"45£",time1:"30 min", 
                             time2:"45 min", time3:"60 min",info:"Courage is not the absence of fear. Courageous people do feel fear, but they are able to manage and overcome their fear so that it does not stop them taking action."
                             }
        
        this.eventsTile[1] = {id:2, color: 'none', cols: 1, rows: 1, name:"Efficiency",image:"/rujutaProduction/assets/images/Efficiency.png",
                             imageRef:"Photo by Toa Heftiba on Unsplash", price1:"25£", price2: "35£", price3:"45£",time1:"30 min", 
                             time2:"45 min", time3:"60 min",info:"Efficiency in the workplace is crucial for productivity. It involves optimizing processes, utilizing resources wisely, and minimizing waste. Efficient teams prioritize tasks, streamline workflows, and adapt to changes swiftly. Embracing technology and fostering a culture of continuous improvement are key to achieving and sustaining workplace efficiency, leading to better results and job satisfaction."
                             }
                             
        this.eventsTile[2] = {id:3, color: 'none', cols: 1, rows: 1, name:"Compassion",image:"/rujutaProduction/assets/images/Compassion.png",
                             imageRef:"Photo by Mariana Rascão on Unsplash", price1:"25£", price2: "35£", price3:"45£",time1:"30 min", 
                             time2:"45 min", time3:"60 min",info:"Compassion at work entails understanding and empathizing with colleagues and clients. It fosters strong relationships, trust, and a supportive environment. Compassionate leaders listen actively, offer assistance, and promote well-being. In the workplace, compassion contributes to a positive atmosphere, increased morale, and better collaboration, ultimately enhancing overall job satisfaction and success."
                             }
                   
        console.log(this.eventsTile);
        
      

    

  }
   
  eventsTile: Tile[] = [];

  calcGridColumns(){
    return 4;
  }
  onClickButton() {
    console.log("in button");
    this.router.navigate(['booking']); // Replace 'another-component' with the actual route path of the component you want to open
  }
  getTicket(a: any){
    console.log(a);
    this.router.navigate(['eventDetails']);
    
  }
}
