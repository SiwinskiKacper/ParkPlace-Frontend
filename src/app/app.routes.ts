import { Routes } from '@angular/router';
import { RegisterPanelComponent } from './register-panel/register-panel.component';
import { DisplayParkSpotsComponent } from './display-park-spots/display-park-spots.component';

export const routes: Routes = [
  { path: '', component: RegisterPanelComponent },
  { path: 'reservation', component: DisplayParkSpotsComponent }
];