import { Component, Input } from '@angular/core';
import { ParkingSpot } from '../models/parking-spot';

@Component({
  selector: 'app-park-spot-history-panel',
  imports: [],
  templateUrl: './park-spot-history-panel.component.html',
  styleUrl: './park-spot-history-panel.component.css'
})
export class ParkSpotHistoryPanelComponent {
  @Input() spot: ParkingSpot = {id: 0, zone: 'A', floor: 1, number: 1, available: true};
}
