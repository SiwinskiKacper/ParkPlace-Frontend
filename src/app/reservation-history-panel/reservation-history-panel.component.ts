import { Component, inject, OnInit } from '@angular/core';
import { NavbarPanelComponent } from '../navbar-panel/navbar-panel.component';
import { FooterComponent } from '../footer/footer.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ParkingSpot } from '../models/parking-spot';
import { ParkingService } from '../parking.service';
import { ParkSpotHistoryPanelComponent } from '../park-spot-history-panel/park-spot-history-panel.component';

@Component({
  selector: 'app-reservation-history-panel',
  templateUrl: './reservation-history-panel.component.html',
  styleUrls: ['./reservation-history-panel.component.css'],
  standalone: true,
  imports: [NavbarPanelComponent, SideBarComponent, FooterComponent, ]
})
export class ReservationHistoryPanelComponent implements OnInit {
  parkingService = inject(ParkingService);
  parkingSpots: ParkingSpot[] = [];

  constructor() {}

  ngOnInit(): void {
    this.fetchReservedSpots();
  }

  

  fetchReservedSpots(): void {
    this.parkingService.getUsersReservedSpots().subscribe({
      next: (data) => {
        this.parkingSpots = data;
        this.renderSpots();
      },
      error: (err) => {
        console.error('Error fetching reserved spots:', err);
        this.renderError();
      }
    });
  }

  renderSpots(): void {
    const container = document.getElementById('historyContainer');
    if (!container) return;

    container.innerHTML = ''; 

    if (this.parkingSpots.length === 0) {
      container.innerHTML = '<p class="text-center">No history reservation.</p>';
      return;
    }

    this.parkingSpots.forEach((spot) => {
      const spotElement = document.createElement('div');
      spotElement.classList.add('reservation-item');
      spotElement.innerHTML = `
        <h3>Miejsce: ${spot.id}</h3>
      `;
      container.appendChild(spotElement);
    });
  }

  renderError(): void {
    const container = document.getElementById('historyContainer');
    if (container) {
      container.innerHTML = '<p class="text-danger text-center">Failed to download reservation history.</p>';
    }
  }
}
