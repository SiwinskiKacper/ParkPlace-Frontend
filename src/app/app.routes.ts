import { Routes } from '@angular/router';
import { RegisterPanelComponent } from './register-panel/register-panel.component';
import { ReservationDashboardComponent } from './reservation-dashboard/reservation-dashboard.component';
import { ReservationPanelComponent } from './reservation-panel/reservation-panel.component';

export const routes: Routes = [
  { path: '', component: RegisterPanelComponent },
  { path: 'dashboard', component: ReservationDashboardComponent },
  { path: 'reservation', component: ReservationPanelComponent }
];