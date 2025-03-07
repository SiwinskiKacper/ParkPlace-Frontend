import { Component} from '@angular/core';
import { ParkingSpot } from '../models/parking-spot';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-panel',
  templateUrl: './reservation-panel.component.html',
  styleUrls: ['./reservation-panel.component.css'],
  imports: [],
})

export class ReservationPanelComponent {
  spotId = '';

  constructor(private route: ActivatedRoute) {
    this.spotId = this.route.snapshot.queryParamMap.get('spotId') || '';
    console.log('Spot: ' + this.spotId);
    };

    ReserveSpot() {
      console.log('Reserving spot: ' + this.spotId);
    }
  }
