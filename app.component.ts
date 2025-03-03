import { Component } from '@angular/core';
import { DisplayParkSpotsComponent } from './display-park-spots/display-park-spots.component';
import { RegisterPanelComponent } from './register-panel/register-panel.component';
import { DOCUMENT } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ParkingSpotsDataService } from './parking-spots-data.service';

@Component({
  selector: 'app-root',
  imports: [DisplayParkSpotsComponent, RegisterPanelComponent, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
   
}
