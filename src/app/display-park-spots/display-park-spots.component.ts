import { Component } from '@angular/core';
import { ParkSpotPanelComponent } from '../park-spot-panel/park-spot-panel.component';
import { ParkingSpotsDataService } from '../parking-spots-data.service';

@Component({
  selector: 'app-display-park-spots',
  templateUrl: './display-park-spots.component.html',
  styleUrl: './display-park-spots.component.css',
  imports: [ParkSpotPanelComponent]
})
export class DisplayParkSpotsComponent {
  ParkingSpots = ParkingSpotsDataService.getAllParkingSpots();
}