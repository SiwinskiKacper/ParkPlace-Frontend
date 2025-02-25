import { Component } from '@angular/core';
interface ParkingSpot {
  id: number;  zone: string; floor: number; number: number; available: boolean;
}

@Component({
  selector: 'app-display-park-spots',
  templateUrl: './display-park-spots.component.html',
  styleUrl: './display-park-spots.component.css'
})
export class DisplayParkSpotsComponent {
  ReserveSpot(spot: ParkingSpot) {
    console.log(`Spot ${spot.id} reserved`);
  }
  GetAvailabilityString(spot: ParkingSpot) {
    return spot.available ? 'occupied' : 'available';
  }

  ParkingSpots = [
    {id: 0, zone: 'A', floor: 1, number: 1, available: false},
    {id: 1, zone: 'A', floor: 1, number: 2, available: false},
    {id: 2, zone: 'A', floor: 2, number: 1, available: false},
    {id: 3, zone: 'B', floor: 1, number: 1, available: true},
    {id: 4, zone: 'B', floor: 1, number: 2, available: true},
  ];
}