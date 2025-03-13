import { Routes } from '@angular/router';
import { RegisterPanelComponent } from './register-panel/register-panel.component';
import { ReservationDashboardComponent } from './reservation-dashboard/reservation-dashboard.component';
import { ReservationPanelComponent } from './reservation-panel/reservation-panel.component';
import { ReservationHistoryPanelComponent } from './reservation-history-panel/reservation-history-panel.component';

export const routes: Routes = [
  { path: '', component: RegisterPanelComponent },
  { path: 'dashboard', component: ReservationDashboardComponent },
  { path: 'reservation', component: ReservationPanelComponent },
  { path: 'reservation-history', component: ReservationHistoryPanelComponent },
];