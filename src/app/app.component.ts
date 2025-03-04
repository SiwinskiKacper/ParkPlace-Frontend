import { Component, inject} from '@angular/core';
import { DisplayParkSpotsComponent } from './display-park-spots/display-park-spots.component';
import { ParkingService } from './parking.service';
import { ParkingSpot } from './models/parking-spot';

@Component({
  selector: 'app-root',
  imports: [DisplayParkSpotsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {}
}
