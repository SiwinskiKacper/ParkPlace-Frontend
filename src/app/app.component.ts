import { Component } from '@angular/core';
import { DisplayParkSpotsComponent } from './display-park-spots/display-park-spots.component';

@Component({
  selector: 'app-root',
  imports: [DisplayParkSpotsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
