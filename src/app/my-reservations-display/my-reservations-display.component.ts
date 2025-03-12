import { Component, inject } from '@angular/core';
import { ParkingService } from '../parking.service';
import { ParkingSpot } from '../models/parking-spot';

@Component({
  selector: 'app-my-reservations-display',
  imports: [],
  templateUrl: './my-reservations-display.component.html',
  styleUrl: './my-reservations-display.component.css'
})
export class MyReservationsDisplayComponent {
  parking_service: ParkingService = inject(ParkingService);
  parking_service_spot: ParkingSpot[] = [];
  constructor() {
    this.parking_service.getUsersReservedSpots().subscribe((data) => {
      this.parking_service_spot = data;
    });
  }
}
