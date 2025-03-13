import { Component, inject } from '@angular/core';
import { DisplayParkSpotsComponent } from '../display-park-spots/display-park-spots.component';
import { NavbarPanelComponent } from '../navbar-panel/navbar-panel.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { ParkingService } from '../parking.service';
import { ParkingSpot } from '../models/parking-spot';
import { ParkSpotHistoryPanelComponent } from '../park-spot-history-panel/park-spot-history-panel.component';

@Component({
  selector: 'app-reservation-history-panel',
  imports: [NavbarPanelComponent, SideBarComponent, 
    FooterComponent, ParkSpotHistoryPanelComponent],
  templateUrl: './reservation-history-panel.component.html',
  styleUrl: './reservation-history-panel.component.css'
})
export class ReservationHistoryPanelComponent {
  parking_service: ParkingService = inject(ParkingService);
  parking_service_spots: ParkingSpot[] = [];
  
  constructor() {
    this.parking_service.getUsersReservedSpots().subscribe((data) => {
      this.parking_service_spots = data;
    });
  }
}
