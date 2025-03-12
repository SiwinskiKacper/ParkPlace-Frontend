import { Routes } from '@angular/router';
import { RegisterPanelComponent } from './register-panel/register-panel.component';
import { ReservationDashboardComponent } from './reservation-dashboard/reservation-dashboard.component';

export const routes: Routes = [
  { path: '', component: RegisterPanelComponent },
  { path: 'reservation', component: ReservationDashboardComponent }

];