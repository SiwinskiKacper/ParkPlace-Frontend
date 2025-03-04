import { Component, inject } from '@angular/core';
import { ParkSpotPanelComponent } from '../park-spot-panel/park-spot-panel.component';
import { ParkingService } from '../parking.service';
import { ParkingSpot } from '../models/parking-spot';

@Component({
  selector: 'app-display-park-spots',
  templateUrl: './display-park-spots.component.html',
  styleUrl: './display-park-spots.component.css',
  imports: [ParkSpotPanelComponent]
})
export class DisplayParkSpotsComponent {
  parking_service: ParkingService = inject(ParkingService);
  parking_service_spot: ParkingSpot[] = [];
  constructor() {
    this.parking_service.getAllParkingSpots().subscribe((data) => {
      this.parking_service_spot = data;
  });
}}