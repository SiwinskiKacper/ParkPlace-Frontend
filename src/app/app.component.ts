import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ParkSpotPanelComponent } from './park-spot-panel/park-spot-panel.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
   
}
