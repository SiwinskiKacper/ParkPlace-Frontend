import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-reservation-panel',
  templateUrl: './reservation-panel.component.html',
  styleUrls: ['./reservation-panel.component.css'],
  imports: [],
})

export class ReservationPanelComponent {
  spotId = '';
  parking_service: ParkingService = inject(ParkingService);

  constructor(private route: ActivatedRoute) {
    this.spotId = this.route.snapshot.queryParamMap.get('spotId') || '';
    console.log('Spot: ' + this.spotId);
    };

    ReserveSpot() {
      console.log('Reserving spot: ' + this.spotId);
      this.parking_service.reserveSpot(this.spotId);
    }
  }
