import { Component, OnInit } from '@angular/core';

interface Trip {
  startPoint:string;
  endPlace:string;
  level:number;
  showArrow:boolean;
  startArrow:string;
  endArrow:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'travelItinerity';

  trips:Trip[]= [];
  newStartPlace:string = '';
  newEndPlace:string = '';

  ngOnInit(): void {

  }

  addTrip()
  {
    const start = this.newStartPlace.trim();
    const end = this.newEndPlace.trim();
    if(!start || !end)
    {
      alert("Please enter both start and end places.");
      return;
    }

    const newTrip:Trip = {
      startPoint: start,
      endPlace: end,
      level: 1,
      showArrow: false,
      startArrow: start.substring(0,3).toUpperCase(),
      endArrow: end.substring(0,3).toUpperCase()
    };

    if(this.trips.length > 0)
    {
      const lastTrip = this.trips[this.trips.length - 1];
      newTrip.level=(newTrip.startPoint === lastTrip.startPoint && newTrip.endPlace ===lastTrip.endPlace) ? 2 : 1;
      // if(newTrip.startPoint === lastTrip.endPlace && newTrip.endPlace === lastTrip.endPlace)
      // {
      //   newTrip.level = 2;
      //   newTrip.showArrow = true;
      // } else if(newTrip.startPoint=== lastTrip.endPlace){

      //   newTrip.showArrow = false;
      // }else {
      //   newTrip.showArrow = true;
      // }

    }
    this.trips.push(newTrip);
    this.newStartPlace = '';
    this.newEndPlace = '';

  }

  isContinued(current:Trip, next:Trip):boolean{
    return current.endPlace === next.startPoint;
  }


}
