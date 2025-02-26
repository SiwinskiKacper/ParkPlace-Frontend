import { Component } from '@angular/core';
import { DisplayParkSpotsComponent } from './display-park-spots/display-park-spots.component';
import { RegisterPanelComponent } from './register-panel/register-panel.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DisplayParkSpotsComponent, RegisterPanelComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   registrationVisible = document.getElementById("registrationPanel");
}
