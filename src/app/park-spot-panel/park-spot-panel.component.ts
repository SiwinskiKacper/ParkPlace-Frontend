import { Component, Input } from '@angular/core';
import { ParkingSpot } from '../models/parking-spot';
import { Router } from '@angular/router';

@Component({
  selector: 'app-park-spot-panel',
  templateUrl: './park-spot-panel.component.html',
  styleUrl: './park-spot-panel.component.css'
})
export class ParkSpotPanelComponent {
  @Input() spot: ParkingSpot = {id: 0, zone: 'A', floor: 1, number: 1, available: true};
  
  constructor(private router: Router) {}
  
  ReserveSpot(spot: ParkingSpot) {
    console.log('Reserving spot: ' + spot.id);
    this.router.navigate(['/reservation'], { queryParams: {spotId: spot.id} });
  }

  GetAvailabilityString(spot: ParkingSpot) {
    return spot.available ? 'occupied' : 'available';
  }
}
