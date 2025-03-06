import { Component } from '@angular/core';
import { DisplayParkSpotsComponent } from '../display-park-spots/display-park-spots.component';

@Component({
  selector: 'app-reservation-dashboard',
  imports: [DisplayParkSpotsComponent],
  templateUrl: './reservation-dashboard.component.html',
  styleUrl: './reservation-dashboard.component.css'
})
export class ReservationDashboardComponent {
  
}
