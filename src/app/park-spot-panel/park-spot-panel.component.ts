import { Component, Input } from '@angular/core';
import { ParkingSpot } from '../models/parking-spot';

@Component({
  selector: 'app-park-spot-panel',
  templateUrl: './park-spot-panel.component.html',
  styleUrl: './park-spot-panel.component.css'
})
export class ParkSpotPanelComponent {
  @Input() spot: ParkingSpot = {id: 0, zone: 'A', floor: 1, number: 1, available: true};

  ReserveSpot(spot: ParkingSpot) {
    console.log(`Spot ${spot.id} reserved`);
  }
  GetAvailabilityString(spot: ParkingSpot) {
    return spot.available ? 'occupied' : 'available';
  }
}
