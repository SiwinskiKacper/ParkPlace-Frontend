import { Component } from '@angular/core';
import { DisplayParkSpotsComponent } from '../display-park-spots/display-park-spots.component';
import { NavbarPanelComponent } from '../navbar-panel/navbar-panel.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-reservation-dashboard',
  imports: [DisplayParkSpotsComponent, NavbarPanelComponent, SideBarComponent, FooterComponent],
  templateUrl: './reservation-dashboard.component.html',
  styleUrl: './reservation-dashboard.component.css'
})
export class ReservationDashboardComponent {

}
